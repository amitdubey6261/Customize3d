import Experience from "./Experience";
import { GroundProjectedSkybox } from "./GroundProjectedSkybox";
import * as _ from 'three' ; 

export default class AdvancedTab{
    experience : Experience ; 
    gps: GroundProjectedSkybox;
    constructor(){
        this.experience = new Experience() ; 
        this.gps = this.experience.env.gps ; 
        this.HDRIToggle() ;
        this.SSR() ; 
        this.EnvIntensity() ; 
        this.LampSwitch() ; 
    }

    HDRIToggle(){
        const elem = document.querySelector('#gps') as HTMLInputElement ; 
        const helper = new _.GridHelper(100 , 30) ;  
        helper.position.set( 0 , -.01 , 0 ) ;
        const floor = this.experience.world.floor ; 

        this.experience.scene.add(helper);

        elem.addEventListener('input' , ()=>{
            if( elem.checked ){
                this.experience.scene.add(this.gps) ; 
                this.experience.scene.remove(helper);
                this.experience.scene.remove(floor) ; 
            }
            else{
                this.experience.scene.remove(this.gps) ;
                this.experience.scene.add(helper);
                this.experience.scene.add(floor) ; 
            }
        })
    }

    EnvIntensity(){
        const elem = document.querySelector('#HDRIIntensity') as HTMLInputElement ; 
        elem.addEventListener('input', (e: Event) => {
            const target = e.target as HTMLInputElement;
            this.experience.renderer.renderer.toneMappingExposure = Number(target.value);
        });
    }

    SSR(){
        const mirror = this.experience.customMaterial.ReflectorMaterial() ;
        mirror.rotateX(-Math.PI/2) ; 
        mirror.position.set( 0 , -.02 , 0 ) ;
        const elem = document.querySelector('#ssr') as HTMLInputElement  ; 

        elem.addEventListener('input' , ()=>{
            if( elem.checked ){
                this.experience.scene.add(mirror) ; 
            }
            else{
                this.experience.scene.remove(mirror) ; 
            }
        })
    }

    LampSwitch(){
        const elem = document.querySelector('#LampSwitch') as HTMLInputElement ; 
        elem.addEventListener('input' , (e:Event)=>{
            const cheked = e.target as HTMLInputElement ; 
            if( cheked.checked ){
                this.experience.resources.light.intensity = .5 ; 
            }
            else{
                this.experience.resources.light.intensity = 0 ; 
            }
        })

        const elem2 = document.querySelector('#LampIntensity') as HTMLInputElement ; 
        elem2.addEventListener('input' , (e:Event )=>{
            const target = e.target as HTMLInputElement ; 
            if( elem.checked )
            this.experience.resources.light.intensity = Number(target.value); 
            else
            alert('On Lamp Switch')
        })
    }

    adjustMaterialTiling = (material:_.MeshPhysicalMaterial) => {
        const { normalMap, aoMap, map, roughnessMap, bumpMap, specularColorMap , transmissionMap } = material;
    
        const elem = document.querySelector('#MaterialTiling') as HTMLInputElement;
        elem.addEventListener('input', (e: Event) => {
            const target = e.target as HTMLInputElement;
            const value = Number(target.value);
    
            if (normalMap !== null) normalMap.repeat.set(value, value);
            if (aoMap !== null) aoMap.repeat.set(value, value);
            if (map !== null) map.repeat.set(value, value);
            if (roughnessMap !== null) roughnessMap.repeat.set(value, value);
            if (bumpMap !== null) bumpMap.repeat.set(value, value);
            if (specularColorMap !== null) specularColorMap.repeat.set(value, value);
            if (transmissionMap !== null) transmissionMap.repeat.set(value, value);
    
            material.needsUpdate = true;
        });
    };
}