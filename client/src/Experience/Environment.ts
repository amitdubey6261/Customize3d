import * as _ from 'three';
import { GroundProjectedSkybox } from "./GroundProjectedSkybox.js";
import Experience from './Experience';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

export default class Environment {
    experince: Experience;
    gps: GroundProjectedSkybox;
    loadedHDRIS: Map<any, any>;
    spinner : HTMLElement ; 
    sunlight : _.DirectionalLight ;
    scene: _.Scene;
    gui :GUI ; 

    constructor() {
        this.experince = new Experience();
        this.scene = this.experince.scene;
        this.gui = this.experince.gui ;
        this.spinner = document.querySelector('.spinner') as HTMLInputElement ;
        this.createEnv();
        this.setupEnvLights() ; 
        this.Lamp() ; 
    }

    async createEnv() {
        console.log('started Loading HDRI . . ')
        const loadedhdris: any = await this.experince.resources.loadHDRI();
        const hdridata = loadedhdris.get('DancingHall')
        this.gps = new GroundProjectedSkybox(hdridata.hdri);
        this.gps.scale.setScalar(100);
        this.gps.radius = hdridata.radius;
        this.gps.height = hdridata.height;
        //@ts-ignore
        this.gps.material.uniforms.map.value = hdridata.texture;
        this.experince.scene.environment = hdridata.hdri;
        this.experince.scene.add(this.gps);
        console.log('Loaded HDRI . . ') ; 
        console.log('Start Loading GLB') ; 
        this.experince.resources.ProgressiveLoading() ; 
        this.spinner.style.display = 'none' ; 
    }

    async setupEnvLights(){
        const params = {
            sunint : 0 ,
            ambint : 0 , 
            exposure : .2  , 
        }

        this.sunlight = new _.DirectionalLight(0xF48037, params.sunint );
        this.sunlight.position.set( -20 , 8 , 10 );
        this.sunlight.castShadow = true;
        this.scene.add(this.sunlight) ; 

        this.sunlight.shadow.mapSize.width = 512; 
        this.sunlight.shadow.mapSize.height = 512;
        this.sunlight.shadow.bias = 0.0001 ; 
        this.sunlight.shadow.camera.near = .5; 
        this.sunlight.shadow.camera.far = 50; 
        this.sunlight.shadow.camera.top = 15 ; 
        this.sunlight.shadow.camera.bottom = -15 ; 
        this.sunlight.shadow.camera.left = -15 ; 
        this.sunlight.shadow.camera.right = 15 ;
        
        const amb = new _.AmbientLight(0xffffff , params.ambint ) ; 
        this.scene.add(amb)

        const folder = this.gui.addFolder('customlight') ; 

        folder.add(params , 'sunint' ,  0 , 100 ).onChange((val)=>{
            this.sunlight.intensity = val ; 
        })

        folder.add(params , 'ambint' , 0 , 100 ).onChange((val)=>{
            amb.intensity = val ; 
        })

        folder.add(params , 'exposure' , 0 , 2 ).onChange((val)=>{
            this.experince.renderer.renderer.toneMappingExposure = val ; 
        })

        this.gui.hide() ; 
    }

    Lamp(){
        const elem = document.getElementById('lamp-btn') as HTMLInputElement ; 
        elem.addEventListener('input' , ()=>{
            if( elem.checked ){
                this.experince.resources.lampLight.intensity = 20 ; 
            }
            else{
                this.experince.resources.lampLight.intensity = 0 ; 
            }
        })

        const lampSlider = document.getElementById('lampIntensity') as HTMLInputElement ; 
        console.log(lampSlider);
        lampSlider.addEventListener('input' , (e)=>{
            //@ts-ignore
            this.experince.resources.lampLight.intensity = parseInt(e.target.value); 
        })

        const stats = document.querySelector('#stats-btn') as HTMLInputElement ;
        stats.addEventListener('input' , ()=>{
            if( stats.checked ){
                document.body.appendChild(this.experince.time.stats.dom) ; 
            }
            else{
                document.body.removeChild(this.experince.time.stats.dom) ; 
            }
        }) 
    }

}

// sunlight() {
    // let sunGroup = new _.Group();
    // let sunLight = new _.DirectionalLight();
    // sunLight.name = 'Dir.Light'
    // sunLight.intensity = 1;
    // sunLight.castShadow = true ; 
    // sunLight.color.set('#ffffeb')
    // sunLight.castShadow = true
    // sunLight.shadow.camera.near = 0.1
    // sunLight.shadow.camera.far = 50
    // sunLight.shadow.camera.right = 15
    // sunLight.shadow.camera.left = -15
    // sunLight.shadow.camera.top = 15
    // sunLight.shadow.camera.bottom = -15
    // sunLight.shadow.mapSize.width = 1024
    // sunLight.shadow.mapSize.height = 1024
    // sunLight.shadow.radius = 1.95
    // sunLight.shadow.blurSamples = 6
    // sunLight.position.set(0, 8, 8);

    // sunLight.shadow.bias = -0.0005
    //@ts-ignore
    // sunGroup.add(sunLight);

    // this.experince.scene.add(sunGroup)
// }