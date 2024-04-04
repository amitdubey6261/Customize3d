import * as _ from 'three';
import * as PP from 'postprocessing';
import Experience from './Experience';

export default class Render {
    experience: Experience;
    renderer: _.WebGLRenderer ; 
    enabled : boolean ; 
    composer : PP.EffectComposer ; 

    constructor() {
        this.experience = new Experience();
        this.enabled = false ; 
        this.createRenderer();
        this.createComposer();
    }

    createRenderer() {
        this.renderer = new _.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: this.experience.canvas , 
            powerPreference: "high-performance",
            premultipliedAlpha: false,
            // depth : false , 
            // preserveDrawingBuffer : true , 
            stencil : false , 
        })
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = _.VSMShadowMap;
        this.renderer.outputColorSpace = _.SRGBColorSpace;
        this.renderer.toneMapping =  _.ACESFilmicToneMapping;
        this.renderer.autoClear = false ; 
    }

    createComposer(){
        this.composer = new PP.EffectComposer( this.renderer) ; 
        this.composer.addPass(new PP.RenderPass(this.experience.scene , this.experience.camera.camera)) ;
        return this.composer ;
    }

    render() {
        if( this.enabled ) {
            this.renderer.render(this.experience.scene, this.experience.camera.camera);
        }else{
            this.composer.render() ; 
        }
    }
}