import * as _ from 'three';
import { TextureLoader } from "three";
import { DRACOLoader, EXRLoader, GLTF, GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import { Materials2, data, datatype, hdritype } from '../Utils/Assets';
import { sofa_models } from '../Utils/SofaCatalog';

export type loadersType = {
    glbloader: GLTFLoader,
    dracoloader: DRACOLoader,
    exrloader: EXRLoader,
    rgbeloader: RGBELoader,
    textureloader: TextureLoader,
}

export type TextureContainer = {
    base: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    normal: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    rough: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    height: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    specular: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    opacity: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    metal: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
    Ao: { onek: _.Texture | null, twok: _.Texture | null, fourk: _.Texture | null },
}

export default class LoadModels {
    loaders: loadersType;
    experience: Experience;
    loadedModels: Map<string, GLTF>;
    light: _.PointLight;
    loadedhdris: Map<string, { height: number, radius: number, hdri: any, texture: any }>
    loadedTextures: Map<string, TextureContainer>;
    downloadStaredFlag: boolean;
    downloadPause: boolean;
    sofa_group : _.Group ; 
    table_group : _.Group ; 


    constructor() {
        this.experience = new Experience();
        this.createModelGroups() ; 
        this.loadedModels = new Map();
        this.loadedhdris = new Map();
        this.loadedTextures = new Map();
        this.downloadPause = false;
        this.createLoaders();
    }

    createModelGroups(){
        this.sofa_group = new _.Group() ; 
        this.table_group = new _.Group() ;
        this.experience.scene.add( this.sofa_group ) ;
        this.experience.scene.add( this.table_group ) ; 
    }

    createLoaders() {
        this.loaders = {
            dracoloader: new DRACOLoader(),
            glbloader: new GLTFLoader(),
            exrloader: new EXRLoader(),
            rgbeloader: new RGBELoader(),
            textureloader: new TextureLoader(),
        }

        this.loaders.exrloader.setDataType(_.FloatType);
        this.loaders.rgbeloader.setDataType(_.FloatType);

        this.loaders.dracoloader.setDecoderPath('/draco/');
        this.loaders.glbloader.setDRACOLoader(this.loaders.dracoloader);
    }

    loadHDRI() {
        return new Promise((res) => {
            this.experience.hdridata.forEach(async (elem: hdritype) => {
                const hdri = await this.loaders.exrloader.loadAsync(elem.path.hdri);
                const texture = await this.loaders.textureloader.loadAsync(elem.path.texture);
                hdri.mapping = _.EquirectangularReflectionMapping;
                hdri.minFilter = _.LinearFilter;
                texture.mapping = _.EquirectangularReflectionMapping;
                texture.colorSpace = _.SRGBColorSpace;

                this.loadedhdris.set(elem.name, {
                    height: elem.hdricoords.height,
                    radius: elem.hdricoords.radius,
                    hdri,
                    texture,
                })
                res(this.loadedhdris);
            })
        })
    }

    loadglTF(): Promise<Map<string, GLTF>> {
        return new Promise((res) => {
            this.experience.data.forEach(async (elm: datatype, idx) => {
                const glTF = await this.loaders.glbloader.loadAsync(elm.path);
                glTF.scene.traverse((e) => {
                    if (e instanceof _.PointLight) {
                        this.light = e;
                    }
                    if (e instanceof _.Mesh) {
                        e.castShadow = true;
                        e.receiveShadow = true;
                        console.log(e.name);
                    }
                })
                this.loadedModels.set(elm.name, glTF);
                if(elm.group){
                    if( elm.group == 'sofa' ){
                        this.sofa_group.add(glTF.scene) ; 
                    }
                    if( elm.group == 'table' ){
                        this.table_group.add(glTF.scene) ; 
                    }
                }
                else{
                    this.experience.scene.add(glTF.scene);
                }
                if (idx == data.length - 1) res(this.loadedModels);
            })
        }
        )
    }

    LoadTexturesOfCategory(category: string): Promise<any> {
        console.log(category);
        return new Promise(async (resolve, reject) => {
            try {
                const promises = Materials2.map(async (e) => {

                    if (category == e.parnetContainer) {
                        const baseTexture = await this.loaders.textureloader.loadAsync(e.base.onek);

                        const loadedTex: TextureContainer = {
                            base: { onek: baseTexture, twok: null, fourk: null },
                            normal: { onek: null, twok: null, fourk: null },
                            rough: { onek: null, twok: null, fourk: null },
                            metal: { onek: null, twok: null, fourk: null },
                            Ao: { onek: null, twok: null, fourk: null },
                            specular: { onek: null, twok: null, fourk: null },
                            opacity: { onek: null, twok: null, fourk: null },
                            height: { onek: null, twok: null, fourk: null },
                        }

                        this.loadedTextures.set(e.name, loadedTex);

                        return baseTexture;
                    }
                });

                const textures = await Promise.all(promises);
                resolve(textures);
            } catch (error) {
                console.error("Error occurred while loading textures:", error);
                reject(error);
            }
        });
    }

    async loadGltf(idx : number ) {
        if( sofa_models[idx].group == 'sofa' ){
            const group = this.experience.resources.sofa_group ; 
            console.log(group);
            group.traverse(elem=>{
                if( elem instanceof _.Mesh ){
                    if( elem.material.map ){
                        elem.material.map.dispose() ; 
                    }
                    elem.material.dispose() ; 
                    elem.geometry.dispose() ; 
                }
            })

            group.remove(...group.children) ; 

            sofa_models[idx].model_path.map( async model_link=>{
                const model = await this.loaders.glbloader.loadAsync(model_link) ; 
                group.add( model.scene ) ; 
                console.log(group);
            })
        }
    }
}