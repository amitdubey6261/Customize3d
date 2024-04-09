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

    ApplyMaterial(idx:number){
        const targetModel = Materials2[0].targetGLBModel.name ; 
        const name  = Materials2[idx].name ; 
        const createdMaterial = this.createMaterial(name , idx  , Materials2[idx].tiling.x , Materials2[idx].tiling.y ) ; 
        console.log(createdMaterial);
        const glb:GLTF = this.experience.resources.loadedModels.get(targetModel) as GLTF ;
        glb.scene.traverse((e)=>{
            if( e instanceof _.Mesh ){
                e.material = createdMaterial ; 
            }
        })
    }

    createMaterial = (name:string , idx:number ,  x:number , y:number ) =>{
        const material = new _.MeshPhysicalMaterial() ; 

        const textures = this.loadedTextures.get(name) ;

        if( textures !== undefined ){
            this.setTextureParams(textures.base.onek , { x , y }) ; 
            material.map = textures.base.onek ; 
        } 

        const ele = Materials2[idx] ; 
        const AoMap = this.loaders.textureloader.load(ele.Ao.oneK) ; 
        const normalMap = this.loaders.textureloader.load(ele.normal.oneK) ; 
        const roughMap = this.loaders.textureloader.load(ele.rough.oneK) ; 
        const heightMap = this.loaders.textureloader.load(ele.height.oneK) ; 
        const opacityMap = this.loaders.textureloader.load(ele.opacity.oneK) ; 
        const specularMap = this.loaders.textureloader.load(ele.specular.oneK) ; 

        this.setTextureParams( AoMap , { x , y } ) ;
        this.setTextureParams( normalMap , { x , y } ) ;
        this.setTextureParams( roughMap , { x , y } ) ;
        this.setTextureParams( heightMap , { x , y } ) ;
        this.setTextureParams( opacityMap , { x , y } ) ;
        this.setTextureParams( specularMap , { x , y } ) ;

        material.normalMap = normalMap ; 
        material.roughnessMap = roughMap ; 
        material.bumpMap = heightMap ; 
        material.aoMap = AoMap ; 
        material.transmissionMap = opacityMap ; 
        material.specularColorMap = specularMap ; 

        return material ; 
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