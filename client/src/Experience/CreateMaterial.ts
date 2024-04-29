import * as _ from 'three';
import Experience from './Experience';
import LoadModels, { TextureContainer, loadersType } from './LoadModels';
import {  Reflector } from 'three/examples/jsm/Addons.js';
import { Materials2 } from '../Utils/Assets';

export default class CreateMaterial {
    experience: Experience;
    loaders: loadersType;
    mirror: Reflector;
    spinner: HTMLElement;
    resources: LoadModels;
    loadedTextures: Map<string, TextureContainer>
    textureResolution: 'onek' | 'twok' | 'fourk';
    refresh = false ; 

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
        this.spinner.style.display = 'block'
        const name = Materials2[idx].name;
        const material = await this.createMaterial(name, idx, Materials2[idx].tiling.x, Materials2[idx].tiling.y);
        this.experience.adnavanced.adjustMaterialTiling(material) ; 
        this.spinner.style.display = 'none'
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
                this.setTextureParams(textures.base[this.experience.textureResolution], { x, y });
                material.map = textures.base[this.experience.textureResolution];
            }

            if(this.refresh){
                if( ele.base[this.experience.textureResolution] !== '' ){
                    if( textures && textures.base && textures.base[this.experience.textureResolution] == null ){
                        const bmap = await this.loaders.textureloader.loadAsync(ele.base[this.experience.textureResolution]) ; 
                        this.setTextureParams(bmap, { x, y });
                        textures.base[this.experience.textureResolution] = bmap ; 
                        material.map = bmap ;
                    }
                    else{
                        const nmap = textures!.normal[this.experience.textureResolution] ; 
                        this.setTextureParams(nmap, { x, y });
                        material.normalMap = nmap 
                    }
                }
            }

            if( ele.normal[this.experience.textureResolution] !== '' ){
                if( textures && textures.normal && textures.normal[this.experience.textureResolution] == null ){
                    const nmap = await this.loaders.textureloader.loadAsync(ele.normal[this.experience.textureResolution]) ; 
                    this.setTextureParams(nmap, { x, y });
                    textures.normal[this.experience.textureResolution] = nmap ; 
                    material.normalMap = nmap 
                }
                else{
                    const nmap = textures!.normal[this.experience.textureResolution] ; 
                    this.setTextureParams(nmap, { x, y });
                    material.normalMap = nmap 
                }
            }

            if( ele.rough[this.experience.textureResolution] !== '' ){
                if( textures && textures.rough && textures.rough[this.experience.textureResolution] == null ){
                    const rmap = await this.loaders.textureloader.loadAsync(ele.rough[this.experience.textureResolution]) ; 
                    this.setTextureParams(rmap, { x, y });
                    textures.rough[this.experience.textureResolution] = rmap ; 
                    material.roughnessMap = rmap ;
                }
                else{
                    const rmap = textures!.rough[this.experience.textureResolution] ; 
                    this.setTextureParams(rmap, { x, y });
                    material.roughnessMap = rmap ;  
                }
            }

            if( ele.height[this.experience.textureResolution] !== '' ){
                if( textures && textures.height && textures.height[this.experience.textureResolution] == null ){
                    const hmap = await this.loaders.textureloader.loadAsync(ele.height[this.experience.textureResolution]) ; 
                    this.setTextureParams(hmap, { x, y });
                    textures.height[this.experience.textureResolution] = hmap ; 
                    material.bumpMap = hmap ;
                }
                else{
                    const hmap = textures!.height[this.experience.textureResolution] ; 
                    this.setTextureParams(hmap, { x, y });
                    material.bumpMap = hmap ;  
                }
            }

            if (ele.Ao[this.experience.textureResolution] !== '') {
                if( textures && textures.Ao && textures.Ao[this.experience.textureResolution] == null ){
                    const AoMap = await this.loaders.textureloader.loadAsync(ele.Ao[this.experience.textureResolution]);
                    this.setTextureParams(AoMap, { x, y });
                    textures.Ao[this.experience.textureResolution] = AoMap ; 
                    material.aoMap = AoMap;
                }
                else{
                    const AoMap = textures!.Ao[this.experience.textureResolution] ; 
                    this.setTextureParams(AoMap, { x, y });
                    material.aoMap = AoMap;
                }
            }
            
            if (ele.specular[this.experience.textureResolution] !== '') {
                if( textures && textures.specular && textures.specular[this.experience.textureResolution] == null ){
                    const sMap = await this.loaders.textureloader.loadAsync(ele.specular[this.experience.textureResolution]);
                    this.setTextureParams(sMap, { x, y });
                    textures.Ao[this.experience.textureResolution] = sMap ; 
                    material.aoMap = sMap;
                }
                else{
                    const sMap = textures!.specular[this.experience.textureResolution] ; 
                    this.setTextureParams(sMap, { x, y });
                    material.specularColorMap = sMap;
                }
            }

            if (ele.opacity[this.experience.textureResolution] !== '') {
                if( textures && textures.opacity && textures.opacity[this.experience.textureResolution] == null ){
                    const oMap = await this.loaders.textureloader.loadAsync(ele.opacity[this.experience.textureResolution]);
                    this.setTextureParams(oMap, { x, y });
                    textures.Ao[this.experience.textureResolution] = oMap ; 
                    material.aoMap = oMap;
                }
                else{
                    const oMap = textures!.opacity[this.experience.textureResolution] ; 
                    this.setTextureParams(oMap, { x, y });
                    material.transmissionMap = oMap;
                }
            }

            res(material);
        })
    }

    HandleTextureResolution() {
        const elem = document.querySelector('.form-select') as HTMLSelectElement ;
        elem.addEventListener('change' , ()=>{
            //@ts-ignore
            this.experience.textureResolution = elem.value ;
            this.experience.handleHTML.setPreLoading()
            this.refresh = true ; 
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