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
    }

    HDRIToggle(){
        const elem = document.querySelector('#gps') as HTMLInputElement ; 
        const helper = new _.GridHelper(100 , 30) ;  
        helper.position.set( 0 , -.01 , 0 ) ;

        this.experience.scene.add(helper);

        elem.addEventListener('input' , ()=>{
            if( elem.checked ){
                this.experience.scene.add(this.gps) ; 
                this.experience.scene.remove(helper);
            }
            else{
                this.experience.scene.remove(this.gps) ;
                this.experience.scene.add(helper);
            }
        })
    }

    SSR(){
        const mirror = this.experience.createMaterial.ReflectorMaterial() ;
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
}