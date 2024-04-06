import * as _ from 'three';
import Experience from './Experience';
import LoadModels, { TextureContainer, loadersType } from './LoadModels';
import { GLTF, Reflector } from 'three/examples/jsm/Addons.js';
import { Materials2 } from '../Utils/Assets';

export default class CreateMaterial {
    experience: Experience;
    loaders: loadersType;
    mirror: Reflector;
    spinner: HTMLElement;
    resources: LoadModels;
    loadedTextures: Map<string, TextureContainer>
    textureResolution: 'onek' | 'twok' | 'threek';

    constructor() {
        this.textureResolution = 'onek';
        this.spinner = document.querySelector('.spinner') as HTMLElement;
        this.experience = new Experience();
        this.loaders = this.experience.resources.loaders;
        this.HandleTextureResolution();
        this.loadedTextures = this.experience.resources.loadedTextures;
    }

    setTextureParams(texture: _.Texture | null, obj: { x: number, y: number }) {
        if (texture) {
            texture.wrapS = _.RepeatWrapping
            texture.wrapT = _.RepeatWrapping
            texture.repeat.set(obj.x, obj.y);
        }
    }

    async createMaterial(idx: number, physicalMaterial: _.MeshPhysicalMaterial) {

        this.experience.resources.downloadPause = true;
        const name = Materials2[idx].name;
        const textureContainer = this.loadedTextures.get(name);

        //BASE MAP
        if (textureContainer) {
            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.base.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.base.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.base.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.base.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.base.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.base.threek;
            }
        }

        //NORMAL MAP
        console.log('Downloading Normal...', Materials2[idx].name);
        if (!(Materials2[idx].normal.oneK == '') && textureContainer) {
            if (textureContainer.normal.onek == null)
                textureContainer.normal.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].normal.oneK);
            if (textureContainer.normal.twok == null)
                textureContainer.normal.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].normal.twoK);
            if (textureContainer.normal.threek == null)
                textureContainer.normal.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].normal.threeK);

            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.normal.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.normal.onek;
                // physicalMaterial.normalMap = textureContainer.normal.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.normal.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.normal.twok;
                // physicalMaterial.normalMap = textureContainer.normal.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.normal.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.normal.threek;
                // physicalMaterial.normalMap = textureContainer.normal.threek;
            }
        }

        //rough MAP
        console.log('Downloading rough...', Materials2[idx].name);

        if (!(Materials2[idx].rough.oneK == '') && textureContainer) {
            if (textureContainer.rough.onek == null) {
                textureContainer.rough.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].rough.oneK);
            }
            if (textureContainer.rough.twok == null) {
                textureContainer.rough.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].rough.twoK);
            }
            if (textureContainer.rough.threek == null) {
                textureContainer.rough.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].rough.threeK);
            }

            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.rough.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.rough.onek;
                // physicalMaterial.roughnessMap = textureContainer.rough.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.rough.twok, Materials2[idx].tiling);
                physicalMaterial.roughnessMap = textureContainer.rough.twok;
                // physicalMaterial.roughnessMap = textureContainer.rough.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.rough.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.rough.threek;
                // physicalMaterial.roughnessMap = textureContainer.rough.threek;

            }
        }

        //metal MAP
        console.log('Downloading rough...', Materials2[idx].name);
        if (!(Materials2[idx].metal.oneK == '') && textureContainer) {
            if (textureContainer.metal.onek == null)
                textureContainer.metal.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].metal.oneK);
            if (textureContainer.metal.twok == null)
                textureContainer.metal.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].metal.twoK);
            if (textureContainer.metal.threek == null)
                textureContainer.metal.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].metal.threeK);

            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.metal.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.metal.onek;
                // physicalMaterial.metalnessMap = textureContainer.metal.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.metal.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.metal.twok;
                // physicalMaterial.metalnessMap = textureContainer.metal.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.metal.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.metal.threek;
                // physicalMaterial.metalnessMap = textureContainer.metal.threek;

            }
        }

        console.log('Downloading height...', Materials2[idx].name);
        if (!(Materials2[idx].height.oneK == '') && textureContainer) {
            if (textureContainer.height.onek == null)
                textureContainer.height.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].height.oneK);
            if (textureContainer.height.twok == null)
                textureContainer.height.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].height.twoK);
            if (textureContainer.height.threek == null)
                textureContainer.height.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].height.threeK);

            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.height.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.height.onek;
                // physicalMaterial.bumpMap = textureContainer.height.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.height.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.height.twok;
                // physicalMaterial.bumpMap = textureContainer.height.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.height.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.height.threek;
                // physicalMaterial.bumpMap = textureContainer.height.threek;
            }
        }

        console.log('Downloading Specular...', Materials2[idx].name);
        if (!(Materials2[idx].specular.oneK == '') && textureContainer) {
            if (textureContainer.specular.onek == null)
                textureContainer.specular.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].specular.oneK);
            if (textureContainer.specular.twok == null)
                textureContainer.specular.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].specular.twoK);
            if (textureContainer.specular.threek == null)
                textureContainer.specular.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].specular.threeK);
            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.specular.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.specular.onek;
                // physicalMaterial.specularIntensityMap = textureContainer.specular.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.specular.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.specular.twok;
                // physicalMaterial.specularIntensityMap = textureContainer.specular.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.specular.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.specular.threek;
                // physicalMaterial.specularIntensityMap = textureContainer.specular.threek;
            }
        }

        console.log('Downloading Opacity...', Materials2[idx].name);
        if (!(Materials2[idx].opacity.oneK == '') && textureContainer) {
            if (textureContainer.opacity.onek)
                textureContainer.opacity.onek = await this.loaders.textureloader.loadAsync(Materials2[idx].opacity.oneK);
            if (textureContainer.opacity.twok)
                textureContainer.opacity.twok = await this.loaders.textureloader.loadAsync(Materials2[idx].opacity.twoK);
            if (textureContainer.opacity.threek)
                textureContainer.opacity.threek = await this.loaders.textureloader.loadAsync(Materials2[idx].opacity.threeK);
            if (this.textureResolution == 'onek') {
                this.setTextureParams(textureContainer.opacity.onek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.opacity.onek;
                physicalMaterial.transmissionMap = textureContainer.opacity.onek;
            }
            if (this.textureResolution == 'twok') {
                this.setTextureParams(textureContainer.opacity.twok, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.opacity.twok;
                physicalMaterial.transmissionMap = textureContainer.opacity.twok;
            }
            if (this.textureResolution == 'threek') {
                this.setTextureParams(textureContainer.opacity.threek, Materials2[idx].tiling);
                physicalMaterial.map = textureContainer.opacity.threek;
                physicalMaterial.transmissionMap = textureContainer.opacity.threek;
            }
        }

        if (textureContainer!.base[this.textureResolution])
            physicalMaterial.map = textureContainer!.base[this.textureResolution]
        if (textureContainer!.normal[this.textureResolution])
            physicalMaterial.normalMap = textureContainer!.normal[this.textureResolution]
        if (textureContainer!.rough[this.textureResolution])
            physicalMaterial.roughnessMap = textureContainer!.rough[this.textureResolution]
        if (textureContainer!.Ao[this.textureResolution])
            physicalMaterial.aoMap = textureContainer!.base[this.textureResolution]
        if (textureContainer!.specular[this.textureResolution])
            physicalMaterial.specularColorMap = textureContainer!.specular[this.textureResolution]
        if (textureContainer!.opacity[this.textureResolution])
            physicalMaterial.transmissionMap = textureContainer!.opacity[this.textureResolution]
        if (textureContainer!.height[this.textureResolution])
            physicalMaterial.bumpMap = textureContainer!.height[this.textureResolution]

        this.experience.resources.downloadPause = false;

        console.log(physicalMaterial);

        physicalMaterial.side = _.FrontSide ; 
        physicalMaterial.envMapIntensity = .1
        physicalMaterial.envMap = this.experience.scene.environment ; 
        console.log(this.experience.scene.environment);
        return physicalMaterial;
    }

    async ApplyMaterial(model: GLTF, idx: number) {
        const physicalMaterial = new _.MeshPhysicalMaterial();

        model.scene.traverse(e => {
            if (e instanceof _.Mesh) {
                e.material = physicalMaterial;
            }
        })

        await this.createMaterial(idx, physicalMaterial);
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

    // async ApplyMaterial(model: GLTF, v: number) {
    //     this.spinner.style.display = 'block';

    //     let material: any;
    //     if (this.textureResolution == '1K') {
    //         material = await this.getMaterial(
    //             Materials2[v].base.oneK,
    //             Materials2[v].normal.oneK,
    //             Materials2[v].height.oneK,
    //             Materials2[v].rough.oneK,
    //             Materials2[v].metal.oneK,
    //             Materials2[v].Ao.oneK,
    //             Materials2[v].opacity.oneK,
    //             Materials2[v].specular.oneK,
    //             [Materials2[v].tiling.x, Materials2[v].tiling.y]
    //         )
    //     }
    //     if (this.textureResolution == '2K') {
    //         material = await this.getMaterial(
    //             Materials2[v].base.twoK,
    //             Materials2[v].normal.twoK,
    //             Materials2[v].height.twoK,
    //             Materials2[v].rough.twoK,
    //             Materials2[v].metal.twoK,
    //             Materials2[v].Ao.twoK,
    //             Materials2[v].opacity.twoK,
    //             Materials2[v].specular.twoK,
    //             [Materials2[v].tiling.x, Materials2[v].tiling.y]
    //         )
    //     }
    //     if (this.textureResolution == '4K') {
    //         material = await this.getMaterial(
    //             Materials2[v].base.threeK,
    //             Materials2[v].normal.threeK,
    //             Materials2[v].height.threeK,
    //             Materials2[v].rough.threeK,
    //             Materials2[v].metal.threeK,
    //             Materials2[v].Ao.threeK,
    //             Materials2[v].opacity.threeK,
    //             Materials2[v].specular.threeK,
    //             [Materials2[v].tiling.x, Materials2[v].tiling.y]
    //         )
    //     }

    //     material.envMapIntensity = .2;

    //     if (Materials2[v].targetGLBModel.targetOnly.length > 0) {
    //         model?.scene.traverse((elem) => {
    //             if (elem.type == 'Mesh') {
    //                 if( Materials2[v].targetGLBModel.targetOnly.includes(elem.name) ){
    //                     //@ts-ignore
    //                     elem.material = material;
    //                 }
    //             }
    //         })

    //     }
    //     else {
    //         model?.scene.traverse((elem) => {
    //             if (elem.type == 'Mesh') {
    //                 //@ts-ignore
    //                 elem.material = material;
    //             }
    //         })
    //     }

    //     this.spinner.style.display = 'none';
    // }

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
                this.textureResolution = 'onek';
                twoK.checked = false;
                threeK.checked = false;
            }
        })

        twoK.addEventListener('input', () => {
            if (twoK.checked) {
                this.textureResolution = 'twok';
                oneK.checked = false;
                threeK.checked = false;
            }
        })

        threeK.addEventListener('input', () => {
            if (threeK.checked) {
                this.textureResolution = 'threek';
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