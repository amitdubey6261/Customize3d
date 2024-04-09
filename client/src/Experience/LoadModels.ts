import * as _ from 'three';
import { TextureLoader } from "three";
import { DRACOLoader, EXRLoader, GLTF, GLTFLoader, KTX2Loader, RGBELoader } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import { Materials2, data, datatype, hdritype } from '../Utils/Assets';

export type loadersType = {
    glbloader: GLTFLoader,
    dracoloader: DRACOLoader,
    exrloader: EXRLoader,
    rgbeloader: RGBELoader,
    textureloader: TextureLoader,
    ktx2loader: KTX2Loader,
}

export type TextureContainer = {
    base: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    normal: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    rough: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    height: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    specular: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    opacity: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    metal: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
    Ao: {onek: _.Texture | null , twok: _.Texture | null , threek: _.Texture | null},
}

export default class LoadModels {
    loaders: loadersType;
    experience: Experience;
    loadedModels: Map<string, GLTF>;
    light: _.PointLight;
    loadedhdris: Map<string, { height: number, radius: number, hdri: any, texture: any }>
    loadedTextures: Map<string, TextureContainer> ;
    downloadStaredFlag : boolean ; 
    downloadPause : boolean ; 

    constructor() {
        this.experience = new Experience();
        this.loadedModels = new Map();
        this.loadedhdris = new Map();
        this.loadedTextures = new Map() ; 
        this.downloadPause = false ; 
        this.createLoaders();
    }

    createLoaders() {
        this.loaders = {
            dracoloader: new DRACOLoader(),
            glbloader: new GLTFLoader(),
            exrloader: new EXRLoader(),
            rgbeloader: new RGBELoader(),
            textureloader: new TextureLoader(),
            ktx2loader: new KTX2Loader(),
        }

        this.loaders.exrloader.setDataType(_.FloatType);
        this.loaders.rgbeloader.setDataType(_.FloatType);

        this.loaders.dracoloader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
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
                    if (e.type == 'PointLight') {
                        //@ts-ignore
                        this.light = e;
                    }
                    if (e.type == 'Mesh') {
                        e.castShadow = true;
                        e.receiveShadow = true;
                    }
                })
                this.loadedModels.set(elm.name, glTF);
                this.experience.scene.add(glTF.scene);
                if (idx == data.length - 1) res(this.loadedModels);
            })
        })
    }

    LoadTexturesOfCategory(category: string): Promise<any> {
        console.log(category);
        return new Promise(async (resolve, reject) => {
            try {
                const promises = Materials2.map(async (e) => {
    
                    if (category == e.parnetContainer) {
                        const baseTexture = await this.loaders.textureloader.loadAsync(e.base.oneK);

                        const loadedTex :TextureContainer = {
                            base:{onek:baseTexture , twok : null , threek : null } , 
                            normal:{onek:null , twok : null , threek : null } , 
                            rough:{onek:null , twok : null , threek : null } , 
                            metal:{onek:null , twok : null , threek : null } , 
                            Ao:{onek:null , twok : null , threek : null } , 
                            specular:{onek:null , twok : null , threek : null } , 
                            opacity:{onek:null , twok : null , threek : null } , 
                            height:{onek:null , twok : null , threek : null } , 
                        }

                        console.log(baseTexture);

                        this.loadedTextures.set(e.name , loadedTex ) ; 

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

    // LoadTexturesOfCategory(category: string):Promise<any>{
    //     return new Promise(async ()=>{
    //         Materials2.map( async (e)=>{
    //             if( category == e.parnetContainer ){
    //                 const baseTexture = await this.loaders.textureloader.loadAsync(e.base.oneK) ;
    //                 console.log(baseTexture); 
    //             }
    //         })
    //     })
    // }

    // preLoadTexture(category: string) {
    //     let idx = 0;
    //     const load = async () => {
    //         if( idx >= Materials2.length ){
    //             return ; 
    //         }
    //         if( category == Materials2[idx].category  ){
    //             console.log('Downloading' , Materials2[idx].name );
    //             const textureContainer : TextureContainer = {
    //                 base : {
    //                     onek : await this.loaders.textureloader.loadAsync( Materials2[idx].base.oneK ) , 
    //                     twok : null, 
    //                     threek : null , 
    //                 } , 
    //                 normal : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 rough : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 metal : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 Ao : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 height : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 specular : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //                 opacity : {
    //                     onek : null , 
    //                     twok : null , 
    //                     threek : null , 
    //                 } , 
    //             }

    //             this.loadedTextures.set(Materials2[idx].name , textureContainer ) ; 
    //             console.log(this.loadedTextures);
    //             idx ++ ; 
    //             if( !this.downloadPause ){
    //                 load() ; 
    //             }
    //             else{
    //                 await this.waitForResume();
    //                 load();
    //             }
    //         }
    //         else{
    //             idx ++ ; 
    //             load();
    //         }
    //     }
    //     load();
    // }

    // waitForResume = async () => {
    //     while (this.downloadPause) {
    //         await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100 milliseconds if download is resumed
    //     }
    // };
    



    // preLoadTexture(category : string ){
    //     Materials2.forEach(async(e)=>{
    //         if(e.category == category ){
    //             console.log('Loding started...' , e.name );
    // const textureContainer : TextureContainer = {
    //     base : {
    //         onek : e.base?.oneK ? await this.loaders.textureloader.loadAsync(e.base.oneK) : undefined , 
    //         twok : e.base?.twoK ? await this.loaders.textureloader.loadAsync(e.base.twoK) : undefined , 
    //         threek :e.base?.threeK ?  await this.loaders.textureloader.loadAsync(e.base.threeK) : undefined , 
    //     } , 
    //     normal : {
    //         onek :  e.normal?.oneK ? await this.loaders.textureloader.loadAsync(e.normal.oneK) : undefined , 
    //         twok : e.normal?.twoK ? await this.loaders.textureloader.loadAsync(e.normal.twoK) : undefined , 
    //         threek : e.normal?.threeK ? await this.loaders.textureloader.loadAsync(e.normal.threeK) : undefined , 
    //     } , 
    //     rough: {
    //         onek: e.rough?.oneK ? await this.loaders.textureloader.loadAsync(e.rough.oneK) : undefined,
    //         twok: e.rough?.twoK ? await this.loaders.textureloader.loadAsync(e.rough.twoK) : undefined,
    //         threek: e.rough?.threeK ? await this.loaders.textureloader.loadAsync(e.rough.threeK) : undefined,
    //     },
    //     height: {
    //         onek: e.height?.oneK ? await this.loaders.textureloader.loadAsync(e.height.oneK) : undefined,
    //         twok: e.height?.twoK ? await this.loaders.textureloader.loadAsync(e.height.twoK) : undefined,
    //         threek: e.height?.threeK ? await this.loaders.textureloader.loadAsync(e.height.threeK) : undefined,
    //     },
    //     specular: {
    //         onek: e.specular?.oneK ? await this.loaders.textureloader.loadAsync(e.specular.oneK) : undefined,
    //         twok: e.specular?.twoK ? await this.loaders.textureloader.loadAsync(e.specular.twoK) : undefined,
    //         threek: e.specular?.threeK ? await this.loaders.textureloader.loadAsync(e.specular.threeK) : undefined,
    //     },
    //     Ao: {
    //         onek: e.Ao?.oneK ? await this.loaders.textureloader.loadAsync(e.Ao.oneK) : undefined,
    //         twok: e.Ao?.twoK ? await this.loaders.textureloader.loadAsync(e.Ao.twoK) : undefined,
    //         threek: e.Ao?.threeK ? await this.loaders.textureloader.loadAsync(e.Ao.threeK) : undefined,
    //     },
    //     metal: {
    //         onek: e.metal?.oneK ? await this.loaders.textureloader.loadAsync(e.metal.oneK) : undefined,
    //         twok: e.metal?.twoK ? await this.loaders.textureloader.loadAsync(e.metal.twoK) : undefined,
    //         threek: e.metal?.threeK ? await this.loaders.textureloader.loadAsync(e.metal.threeK) : undefined,
    //     },
    // } 

    //             console.log(textureContainer);
    //             console.log('Loading Finished...' , e.name ,  textureContainer );
    //         }
    //     })
    // }
}