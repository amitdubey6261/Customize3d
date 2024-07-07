import * as _ from 'three';
import { TextureLoader } from "three";
import { DRACOLoader, EXRLoader, GLTF, GLTFLoader, RGBELoader } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import { BaseTex, MaterialDir, hdritype } from '../Utils/Assets';
import { sofa_models } from '../Utils/SofaCatalog';
import { createSubsurfaceMaterial } from './CustomMaterial';

// const spinner = document.querySelector('.spinner') as HTMLElement;

export type loadersType = {
    glbloader: GLTFLoader,
    dracoloader: DRACOLoader,
    exrloader: EXRLoader,
    rgbeloader: RGBELoader,
    textureloader: TextureLoader,
}

export type TextureContainer = {
    base: { onek: _.Texture | null },
    normal: { onek: _.Texture | null },
    rough: { onek: _.Texture | null },
    height: { onek: _.Texture | null },
    specular: { onek: _.Texture | null },
    opacity: { onek: _.Texture | null },
    metal: { onek: _.Texture | null },
    Ao: { onek: _.Texture | null },
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
    sofa_group: _.Group;
    table_group: _.Group;
    spinner: HTMLElement;
    lampcover: _.Mesh;
    lampLight: _.PointLight;
    propmt : HTMLElement ; 


    constructor() {
        this.experience = new Experience();
        this.createModelGroups();
        this.loadedModels = new Map();
        this.loadedhdris = new Map();
        this.loadedTextures = new Map();
        this.downloadPause = false;
        this.spinner = document.querySelector('.spinner') as HTMLElement;
        this.createLoaders();
    }

    createModelGroups() {
        this.sofa_group = new _.Group();
        this.table_group = new _.Group();
        this.experience.scene.add(this.sofa_group);
        this.experience.scene.add(this.table_group);
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


        this.loaders.dracoloader.setDecoderConfig({ type: "js" })
        this.loaders.dracoloader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
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

    ProgressiveLoading() {
        const loadModel = (idx: number) => {
            this.spinner.style.display = 'inline' ; 
            if (idx < this.experience.data.length) {
                this.loaders.glbloader.loadAsync(this.experience.data[idx].path).then((gltf) => {
                    gltf.scene.traverse((e) => {
                        if (e instanceof _.Mesh) {
                            if (e.name == 'Lamp_Cover') {
                                this.lampcover = e;
                            }
                            if (this.experience.data[idx].group == null) {
                                if (e.name.startsWith('CA')) {
                                    e.castShadow = true;
                                }
                                if (e.name.startsWith('RS')) {
                                    e.receiveShadow = true;
                                }
                            }
                            else {
                                e.castShadow = true;
                                e.receiveShadow = true;
                            }
                        }
                        if (e instanceof _.PointLight) {
                            this.lampLight = e;
                        }
                    })
                    if (this.experience.data[idx].group == 'sofa') {
                        this.sofa_group.add(gltf.scene);
                    }
                    else {
                        this.experience.scene.add(gltf.scene);
                    }
                    idx++;
                    loadModel(idx);
                })
            }
            else {
                console.log('Loaded All Models')

                setTimeout(() => {
                    this.experience.env.sunlight.intensity = 12;
                    this.experience.renderer.ComposerEnabled = true;

                    const suburfaceMaterial = createSubsurfaceMaterial();
                    this.lampcover.material = suburfaceMaterial;

                    this.lampLight.intensity = 0;
                    this.lampLight.castShadow = true;
                    this.lampLight.shadow.bias = -0.00009;
                    this.lampLight.shadow.mapSize.width = 1024;
                    this.lampLight.shadow.mapSize.height = 1024;

                    this.experience.propmt.style.opacity = "0"  ; 
                    this.spinner.style.display = 'none' ; 

                }, 2000);
                return;
            }
        }

        this.spinner.style.display = 'inline' ; 
        loadModel(0);
    }

    async LoadTexturesOfCategory(category: string): Promise<any> {

        let count = 0;

        return new Promise((res) => {
            MaterialDir.forEach((e, idx) => {
                if (category == e.parnetContainer) {
                    this.loaders.textureloader.loadAsync(e.base_path + e.textures[0]).then((e) => {
                        BaseTex[idx] = e;
                        count++;
                        if (count == 4) {
                            res(BaseTex);
                        }
                    })
                }
            })
        })
    }

    async loadGltf(idx: number) {
        if (sofa_models[idx].group == 'sofa') {
            const group = this.experience.resources.sofa_group;
            group.traverse(elem => {
                if (elem instanceof _.Mesh) {
                    if (elem.material.map) {
                        elem.material.map.dispose();
                    }
                    elem.material.dispose();
                    elem.geometry.dispose();
                }
            })

            group.remove(...group.children);

            sofa_models[idx].model_path.map(async model_link => {
                this.spinner.style.display = 'block';
                const model = await this.loaders.glbloader.loadAsync(model_link);
                model.scene.traverse((e) => {
                    if (e instanceof _.Mesh) {
                        e.castShadow = true;
                        e.receiveShadow = true;
                    }
                })
                group.add(model.scene);
                this.spinner.style.display = 'none';
            })

        }
    }
}