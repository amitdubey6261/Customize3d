import * as _ from 'three';
import Experience from './Experience';
import LoadModels, { TextureContainer, loadersType } from './LoadModels';
import { Reflector } from 'three/examples/jsm/Addons.js';
import { BaseTex, MaterialDir  } from '../Utils/Assets';

export default class CreateMaterial {
    experience: Experience;
    loaders: loadersType;
    mirror: Reflector;
    spinner: HTMLElement;
    resources: LoadModels;
    loadedTextures: Map<string, TextureContainer>
    textureResolution: 'onek' | 'twok' | 'fourk';
    propmt: HTMLElement;
    refresh = false;

    constructor() {
        this.textureResolution = 'onek';
        this.spinner = document.querySelector('.spinner') as HTMLElement;
        this.experience = new Experience();
        this.loaders = this.experience.resources.loaders;
        // this.HandleTextureResolution();
        this.loadedTextures = this.experience.resources.loadedTextures;
        this.propmt = document.querySelector('.prompt') as HTMLElement;
    }

    setTextureParams(texture: _.Texture | null, obj: { x: number, y: number }) {
        if (texture) {
            texture.wrapS = _.RepeatWrapping
            texture.wrapT = _.RepeatWrapping
            texture.repeat.set(obj.x, obj.y);
        }
    }

    async ApplyMaterial(idx: number) {
        this.spinner.style.display = 'inline';
        this.experience.propmt.style.opacity = '1' ;
        this.experience.propmt.innerHTML = 'Applying Material'
        
        const activeSofa = this.experience.resources.sofa_group;
        
        const material = new _.MeshPhysicalMaterial();
        material.envMap = this.experience.scene.environment;
        material.side = _.DoubleSide;

        if (this.experience.handleHTML.day) {
            material.envMapIntensity = .5;
        }
        else {
            material.envMapIntensity = 1;
        }

        activeSofa.traverse((e) => {
            if (e instanceof _.Mesh) {
                if (e.name.substring(0, 4) === MaterialDir[idx].category.substring(0, 4)) {
                    e.material = material;
                }
            }
        })

        if (MaterialDir[idx].category == 'metals') {
            material.roughness = .3;
            material.metalness = .6;
        }

        const base = BaseTex[idx];
        this.setTextureParams(base, MaterialDir[idx].tile);
        material.map = base;

        this.loaders.textureloader.loadAsync(MaterialDir[idx].base_path + MaterialDir[idx].textures[1]).then((e) => {
            this.setTextureParams(e, MaterialDir[idx].tile)
            this.experience.propmt.innerHTML = 'Applying Normals'
            material.normalMap = e;
            this.loaders.textureloader.loadAsync(MaterialDir[idx].base_path + MaterialDir[idx].textures[2]).then((e) => {
                this.experience.propmt.innerHTML = 'Applying Roughness'
                this.setTextureParams(e, MaterialDir[idx].tile)
                material.roughnessMap = e;
                this.loaders.textureloader.loadAsync(MaterialDir[idx].base_path + MaterialDir[idx].textures[3]).then((e) => {
                    this.experience.propmt.innerHTML = 'Applying Thickness'
                    this.setTextureParams(e, MaterialDir[idx].tile)
                    material.bumpMap = e;
                    material.needsUpdate = true;
                    this.experience.propmt.innerHTML = 'Calculating ...'
                    this.spinner.style.display = 'none';
                    this.experience.propmt.style.opacity = '0' ;
                })
            })
        })
    }

    update() {
    }
}