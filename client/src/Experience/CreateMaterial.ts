import * as _ from 'three';
import Experience from './Experience';
import { loadersType } from './LoadModels';
import { GLTF, Reflector } from 'three/examples/jsm/Addons.js';
import { Materials2 } from '../Utils/Assets';

export default class CreateMaterial {
    experience: Experience;
    loaders: loadersType;
    mirror: Reflector;
    spinner: HTMLElement;
    textureResolution: '1K' | '2K' | '4K';

    constructor() {
        this.textureResolution = '1K';
        this.spinner = document.querySelector('.spinner') as HTMLElement;
        this.experience = new Experience();
        this.loaders = this.experience.resources.loaders;
        this.HandleTextureResolution();
    }

    getMaterial(base: string, normal: string, height: string, rough: string, metallic: string, ao: string, opacity: string, specular: string, tiling: number[]): Promise<_.MeshPhysicalMaterial> {
        return new Promise(async (res) => {
            let baseT, normalT, heightT, roughT, mettalicT, aoT, opacityT, specularT;

            const material = new _.MeshPhysicalMaterial();

            if (base !== "") {
                baseT = await this.loaders.textureloader.loadAsync(base);
                baseT.wrapS = _.RepeatWrapping
                baseT.wrapT = _.RepeatWrapping
                baseT.repeat.set(tiling[0], tiling[1]);
                material.map = baseT;
            }
            if (normal !== "") {
                normalT = await this.loaders.textureloader.loadAsync(normal);
                normalT.wrapS = _.RepeatWrapping
                normalT.wrapT = _.RepeatWrapping
                normalT.repeat.set(tiling[0], tiling[1]);
                material.normalMap = normalT;
            }
            if (height !== "") {
                heightT = await this.loaders.textureloader.loadAsync(height);
                heightT.wrapS = _.RepeatWrapping
                heightT.wrapT = _.RepeatWrapping
                heightT.repeat.set(tiling[0], tiling[1]);
                material.bumpMap = heightT;
            }
            if (rough !== "") {
                roughT = await this.loaders.textureloader.loadAsync(rough);
                roughT.wrapS = _.RepeatWrapping
                roughT.wrapT = _.RepeatWrapping
                roughT.repeat.set(tiling[0], tiling[1]);
                material.roughnessMap = roughT;
            }
            if (metallic !== "") {
                mettalicT = await this.loaders.textureloader.loadAsync(metallic);
                mettalicT.wrapS = _.RepeatWrapping
                mettalicT.wrapT = _.RepeatWrapping
                mettalicT.repeat.set(tiling[0], tiling[1]);
                material.metalnessMap = mettalicT;
            }
            if (ao !== "") {
                aoT = await this.loaders.textureloader.loadAsync(ao);
                aoT.wrapS = _.RepeatWrapping
                aoT.wrapT = _.RepeatWrapping
                aoT.repeat.set(tiling[0], tiling[1]);
                material.aoMap = aoT;
            }
            if (opacity !== "") {
                opacityT = await this.loaders.textureloader.loadAsync(opacity);
                opacityT.wrapS = _.RepeatWrapping;
                opacityT.wrapT = _.RepeatWrapping;
                opacityT.repeat.set(tiling[0], tiling[1]);
            }
            if (specular !== "") {
                specularT = await this.loaders.textureloader.loadAsync(specular);
                specularT.wrapS = _.RepeatWrapping
                specularT.wrapT = _.RepeatWrapping
                specularT.repeat.set(tiling[0], tiling[1]);
                material.specularIntensityMap = specularT;
            }

            material.side = _.FrontSide;

            res(material);
        })
    }

    // getMaterial(base: string, normal: string, height: string, rough: string, metallic: string, ao: string, opacity: string, specular: string, tiling: number[]): Promise<_.MeshPhysicalMaterial> {
    //     return new Promise(async (res) => {
    //         let baseT, normalT, heightT, roughT, mettalicT, aoT, opacityT, specularT;

    //         const material = new _.MeshPhysicalMaterial();

    //         if (base !== "") {
    //             baseT = await this.loaders.textureloader.loadAsync(base);
    //             baseT.wrapS = _.RepeatWrapping
    //             baseT.wrapT = _.RepeatWrapping
    //             baseT.repeat.set(tiling[0], tiling[1]);
    //             material.map = baseT;
    //         }
    //         if (normal !== "") {
    //             normalT = await this.loaders.textureloader.loadAsync(normal);
    //             normalT.wrapS = _.RepeatWrapping
    //             normalT.wrapT = _.RepeatWrapping
    //             normalT.repeat.set(tiling[0], tiling[1]);
    //             material.normalMap = normalT;
    //         }
    //         if (height !== "") {
    //             heightT = await this.loaders.textureloader.loadAsync(height);
    //             heightT.wrapS = _.RepeatWrapping
    //             heightT.wrapT = _.RepeatWrapping
    //             heightT.repeat.set(tiling[0], tiling[1]);
    //             material.bumpMap = heightT;
    //         }
    //         if (rough !== "") {
    //             roughT = await this.loaders.textureloader.loadAsync(rough);
    //             roughT.wrapS = _.RepeatWrapping
    //             roughT.wrapT = _.RepeatWrapping
    //             roughT.repeat.set(tiling[0], tiling[1]);
    //             material.roughnessMap = roughT;
    //         }
    //         if (metallic !== "") {
    //             mettalicT = await this.loaders.textureloader.loadAsync(metallic);
    //             mettalicT.wrapS = _.RepeatWrapping
    //             mettalicT.wrapT = _.RepeatWrapping
    //             mettalicT.repeat.set(tiling[0], tiling[1]);
    //             material.metalnessMap = mettalicT;
    //         }
    //         if (ao !== "") {
    //             aoT = await this.loaders.textureloader.loadAsync(ao);
    //             aoT.wrapS = _.RepeatWrapping
    //             aoT.wrapT = _.RepeatWrapping
    //             aoT.repeat.set(tiling[0], tiling[1]);
    //             material.aoMap = aoT;
    //         }
    //         if (opacity !== "") {
    //             opacityT = await this.loaders.textureloader.loadAsync(opacity);
    //             opacityT.wrapS = _.RepeatWrapping;
    //             opacityT.wrapT = _.RepeatWrapping;
    //             opacityT.repeat.set(tiling[0], tiling[1]);
    //         }
    //         if (specular !== "") {
    //             specularT = await this.loaders.textureloader.loadAsync(specular);
    //             specularT.wrapS = _.RepeatWrapping
    //             specularT.wrapT = _.RepeatWrapping
    //             specularT.repeat.set(tiling[0], tiling[1]);
    //             material.specularIntensityMap = specularT;
    //         }

    //         material.side = _.FrontSide;

    //         res(material);
    //     })
    // }

    async ApplyMaterial(model: GLTF, v: number) {
        this.spinner.style.display = 'block';

        let material: any;
        if (this.textureResolution == '1K') {
            material = await this.getMaterial(
                Materials2[v].base.oneK,
                Materials2[v].normal.oneK,
                Materials2[v].height.oneK,
                Materials2[v].rough.oneK,
                Materials2[v].metal.oneK,
                Materials2[v].Ao.oneK,
                Materials2[v].opacity.oneK,
                Materials2[v].specular.oneK,
                [Materials2[v].tiling.x, Materials2[v].tiling.y]
            )
        }
        if (this.textureResolution == '2K') {
            material = await this.getMaterial(
                Materials2[v].base.twoK,
                Materials2[v].normal.twoK,
                Materials2[v].height.twoK,
                Materials2[v].rough.twoK,
                Materials2[v].metal.twoK,
                Materials2[v].Ao.twoK,
                Materials2[v].opacity.twoK,
                Materials2[v].specular.twoK,
                [Materials2[v].tiling.x, Materials2[v].tiling.y]
            )
        }
        if (this.textureResolution == '4K') {
            material = await this.getMaterial(
                Materials2[v].base.threeK,
                Materials2[v].normal.threeK,
                Materials2[v].height.threeK,
                Materials2[v].rough.threeK,
                Materials2[v].metal.threeK,
                Materials2[v].Ao.threeK,
                Materials2[v].opacity.threeK,
                Materials2[v].specular.threeK,
                [Materials2[v].tiling.x, Materials2[v].tiling.y]
            )
        }
        // const material = await this.getMaterial(
        //     Materials[v].base_texture,
        //     Materials[v].normal_texture,
        //     Materials[v].height_texture,
        //     Materials[v].roughness_texture,
        //     Materials[v].metalic_texture,
        //     Materials[v].ao_texture,
        //     Materials[v].opacity_texture,
        //     Materials[v].specular_texture,
        //     [Materials[v].tiling.x, Materials[v].tiling.y]
        // )

        material.envMapIntensity = .2;

        if (Materials2[v].targetGLBModel.targetOnly.length > 0) {
            model?.scene.traverse((elem) => {
                if (elem.type == 'Mesh') {
                    if( Materials2[v].targetGLBModel.targetOnly.includes(elem.name) ){
                        //@ts-ignore
                        elem.material = material;
                    }
                }
            })
    
        }
        else {
            model?.scene.traverse((elem) => {
                if (elem.type == 'Mesh') {
                    //@ts-ignore
                    elem.material = material;
                }
            })
        }

        this.spinner.style.display = 'none';
    }

    // async ApplyMaterial(model: GLTF, v: number) {
    //     this.spinner.style.display = 'block' ; 

    //     const material = await this.getMaterial(
    //         Materials[v].base_texture,
    //         Materials[v].normal_texture,
    //         Materials[v].height_texture,
    //         Materials[v].roughness_texture,
    //         Materials[v].metalic_texture,
    //         Materials[v].ao_texture,
    //         Materials[v].opacity_texture,
    //         Materials[v].specular_texture,
    //         [Materials[v].tiling.x, Materials[v].tiling.y]
    //     )

    //     if (v >= 8) {
    //         material.envMapIntensity = .7 ; 
    //         material.roughness = .7 ; 
    //         material.metalness  = 1 ; 
    //         model?.scene.traverse((elem) => {
    //             if (elem.type == 'Mesh') {
    //                 if (elem.name !== 'Rectangle005') {
    //                     //@ts-ignore
    //                     elem.material = material;
    //                 }
    //             }
    //         })

    //         this.spinner.style.display = 'none' ; 
    //     }
    //     else {
    //         material.envMapIntensity = .2;
    //         model?.scene.traverse((elem) => {
    //             if (elem.type == 'Mesh') {
    //                 //@ts-ignore
    //                 elem.material = material;
    //             }
    //         })

    //         this.spinner.style.display = 'none' ; 
    //     }
    // }

    HandleTextureResolution() {
        const oneK = document.querySelector('#oneK') as HTMLInputElement;
        const twoK = document.querySelector('#twoK') as HTMLInputElement;
        const threeK = document.querySelector('#threeK') as HTMLInputElement;

        oneK.addEventListener('input', () => {
            if (oneK.checked) {
                this.textureResolution = '1K';
                twoK.checked = false;
                threeK.checked = false;
            }
        })

        twoK.addEventListener('input', () => {
            if (twoK.checked) {
                this.textureResolution = '2K';
                oneK.checked = false;
                threeK.checked = false;
            }
        })

        threeK.addEventListener('input', () => {
            if (threeK.checked) {
                this.textureResolution = '4K';
                oneK.checked = false;
                twoK.checked = false;
            }
        })
    }

    ReflectorMaterial() {
        this.mirror = new Reflector(new _.PlaneGeometry(100, 100), {
            clipBias: 0.05,
            textureWidth: window.innerWidth * window.devicePixelRatio,
            textureHeight: window.innerHeight * window.devicePixelRatio,
            color: 0x777777,
        })
        return this.mirror;
    }

    update() {
    }
}