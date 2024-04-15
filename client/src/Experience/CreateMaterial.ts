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

    async ApplyMaterial(idx: number) {
        const name = Materials2[idx].name;
        const material = await this.createMaterial(name, idx, Materials2[idx].tiling.x, Materials2[idx].tiling.y);
        this.experience.adnavanced.adjustMaterialTiling(material) ; 
    }

    createMaterial = async (name: string, idx: number, x: number, y: number):Promise<_.MeshPhysicalMaterial> => {
        return new Promise(async (res) => {
            const sofa_group = this.experience.resources.sofa_group ; 

            const material = new _.MeshPhysicalMaterial();
            material.envMap = this.experience.scene.environment ; 
            material.envMapIntensity = .1 ;
            material.side = _.FrontSide ;  
            
            const ele = Materials2[idx];

            if(ele.category == 'Glass' || ele.category == 'GlassPattern'){
                material.transmission = 1 ; 
                material.roughness = 0 ; 
                material.envMapIntensity = 1 ; 
                material.side = _.DoubleSide ;  
            }

            sofa_group.traverse(elem=>{
                if( elem instanceof _.Mesh ){
                    if( elem.name.substring( 0 , 4 ) === ele.category.substring(0,4) ){
                        elem.material = material ; 
                    }
                }
            })

            const textures = this.loadedTextures.get(name);

            if (textures !== undefined) {
                this.setTextureParams(textures.base.onek, { x, y });
                material.map = textures.base.onek;
            }


            if( ele.normal.oneK !== '' ){
                if( textures && textures.normal && textures.normal.onek == null ){
                    const nmap = await this.loaders.textureloader.loadAsync(ele.normal.oneK) ; 
                    this.setTextureParams(nmap, { x, y });
                    textures.normal.onek = nmap ; 
                    material.normalMap = nmap 
                }
                else{
                    const nmap = textures!.normal.onek ; 
                    this.setTextureParams(nmap, { x, y });
                    material.normalMap = nmap 
                }
            }

            if( ele.rough.oneK !== '' ){
                if( textures && textures.rough && textures.rough.onek == null ){
                    const rmap = await this.loaders.textureloader.loadAsync(ele.rough.oneK) ; 
                    this.setTextureParams(rmap, { x, y });
                    textures.rough.onek = rmap ; 
                    material.roughnessMap = rmap ;
                }
                else{
                    const rmap = textures!.rough.onek ; 
                    this.setTextureParams(rmap, { x, y });
                    material.roughnessMap = rmap ;  
                }
            }

            if( ele.height.oneK !== '' ){
                if( textures && textures.height && textures.height.onek == null ){
                    const hmap = await this.loaders.textureloader.loadAsync(ele.height.oneK) ; 
                    this.setTextureParams(hmap, { x, y });
                    textures.height.onek = hmap ; 
                    material.bumpMap = hmap ;
                }
                else{
                    const hmap = textures!.height.onek ; 
                    this.setTextureParams(hmap, { x, y });
                    material.bumpMap = hmap ;  
                }
            }

            if (ele.Ao.oneK !== '') {
                if( textures && textures.Ao && textures.Ao.onek == null ){
                    const AoMap = await this.loaders.textureloader.loadAsync(ele.Ao.oneK);
                    this.setTextureParams(AoMap, { x, y });
                    textures.Ao.onek = AoMap ; 
                    material.aoMap = AoMap;
                }
                else{
                    const AoMap = textures!.Ao.onek ; 
                    this.setTextureParams(AoMap, { x, y });
                    material.aoMap = AoMap;
                }
            }
            
            if (ele.specular.oneK !== '') {
                if( textures && textures.specular && textures.specular.onek == null ){
                    const sMap = await this.loaders.textureloader.loadAsync(ele.specular.oneK);
                    this.setTextureParams(sMap, { x, y });
                    textures.Ao.onek = sMap ; 
                    material.aoMap = sMap;
                }
                else{
                    const sMap = textures!.specular.onek ; 
                    this.setTextureParams(sMap, { x, y });
                    material.specularColorMap = sMap;
                }
            }

            if (ele.opacity.oneK !== '') {
                if( textures && textures.opacity && textures.opacity.onek == null ){
                    const oMap = await this.loaders.textureloader.loadAsync(ele.opacity.oneK);
                    this.setTextureParams(oMap, { x, y });
                    textures.Ao.onek = oMap ; 
                    material.aoMap = oMap;
                }
                else{
                    const oMap = textures!.opacity.onek ; 
                    this.setTextureParams(oMap, { x, y });
                    material.transmissionMap = oMap;
                }
            }

            res(material);
        })
    }

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