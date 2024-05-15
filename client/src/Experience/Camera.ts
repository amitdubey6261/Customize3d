import * as _ from 'three' ; 
import Experience from './Experience';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default class Camera{
    experience : Experience ;     
    camera  : _.PerspectiveCamera ; 
    controls : OrbitControls ; 
    canvas : HTMLElement
    constructor(){
        this.experience = new Experience() ; 
        this.camera = new _.PerspectiveCamera(50 , window.innerWidth/window.innerHeight , .1 , 200 ) ; 
        this.camera.position.set(  0 , .1 , -.3  ) ; 
        this.canvas = this.experience.canvas as HTMLElement ; 
    }

    intitOrbit(){
        this.controls  = new OrbitControls( this.camera , this.canvas ) ; 
        this.controls.enableDamping = true 
        this.controls.dampingFactor = 0.05
        this.controls.minDistance = .1
        this.controls.maxDistance = 3.2
        this.controls.maxPolarAngle = Math.PI / 2
        this.controls.enablePan = false ; 
        this.controls.target.set(0, 1.5 , -3)
    }

    update(){
        this.controls.update() ; 
    }
}