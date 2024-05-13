import * as _ from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { TAARenderPass } from 'three/examples/jsm/postprocessing/TAARenderPass.js';
import { GammaCorrectionShader } from 'three/examples/jsm/Addons.js';

import Experience from './Experience';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

export default class Render {
    experience: Experience;
    renderer: _.WebGLRenderer;
    enabled: boolean;
    composer: EffectComposer;

    constructor() {
        this.experience = new Experience();
        this.enabled = false;
        this.createRenderer();
        this.createComposer();
    }

    createRenderer() {
        this.renderer = new _.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: this.experience.canvas,
            powerPreference: "high-performance",
            premultipliedAlpha: false,
            stencil: false,
        })
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = _.VSMShadowMap;
        this.renderer.outputColorSpace = _.SRGBColorSpace;
        this.renderer.toneMapping = _.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = .5 ; 
        this.renderer.autoClear = false;
    }

    createComposer(){
        this.composer = new EffectComposer( this.renderer ) ; 
        const renderPass = new RenderPass( this.experience.scene , this.experience.camera.camera );
        renderPass.clearAlpha = 0 ; 
        this.composer.addPass(renderPass) ; 

        // const fxaapass = new ShaderPass(FXAAShader) ; 

        const ssaoPass = new SSAOPass( this.experience.scene , this.experience.camera.camera , window.innerWidth , window.innerHeight );
        this.composer.addPass( ssaoPass );

        const outputPass = new OutputPass();
        this.composer.addPass( outputPass );

        // const pixelRatio = this.renderer.getPixelRatio();
        // fxaapass.material.uniforms['resolution'].value.x = 1/(window.innerWidth*pixelRatio)
        // fxaapass.material.uniforms['resolution'].value.y = 1/(window.innerHeight*pixelRatio)

        // this.composer.addPass(fxaapass) ; 

        const gui = new GUI();

        gui.add( ssaoPass, 'output', {
            'Default': SSAOPass.OUTPUT.Default,
            'SSAO Only': SSAOPass.OUTPUT.SSAO,
            'SSAO Only + Blur': SSAOPass.OUTPUT.Blur,
            'Depth': SSAOPass.OUTPUT.Depth,
            'Normal': SSAOPass.OUTPUT.Normal
        } ).onChange( function ( value ) {

            ssaoPass.output = value;

        } );

        const param = { TAAEnabled: '1', TAASampleLevel: 0 };
        let taaRenderPass : any ; 

        gui.add( param, 'TAAEnabled', {
            'Disabled': '0',
            'Enabled': '1'
        } ).onFinishChange( function () {

            if (  taaRenderPass ) {

                taaRenderPass.enabled = ( param.TAAEnabled === '1' );
                renderPass.enabled = ( param.TAAEnabled !== '1' );

            }

        } );

        gui.add( param, 'TAASampleLevel', {
            'Level 0: 1 Sample': 0,
            'Level 1: 2 Samples': 1,
            'Level 2: 4 Samples': 2,
            'Level 3: 8 Samples': 3,
            'Level 4: 16 Samples': 4,
            'Level 5: 32 Samples': 5
        } ).onFinishChange( function () {

            if ( taaRenderPass ) {

                taaRenderPass.sampleLevel = param.TAASampleLevel;

            }

        } );

        gui.close();

        taaRenderPass = new TAARenderPass( this.experience.scene , this.experience.camera.camera );
        taaRenderPass.unbiased = false;
        this.composer.addPass( taaRenderPass );

        const gammapass = new ShaderPass( GammaCorrectionShader ) ; 
        this.composer.addPass(gammapass)

        gui.add( ssaoPass, 'kernelRadius' ).min( 0 ).max( 32 );
        gui.add( ssaoPass, 'minDistance' ).min( 0.001 ).max( 0.02 );
        gui.add( ssaoPass, 'maxDistance' ).min( 0.01 ).max( 0.3 );
        gui.add( ssaoPass, 'enabled' );

        return this.composer ;
    }

    render() {
        if (this.enabled) {
            this.renderer.render(this.experience.scene, this.experience.camera.camera);
        } else {
            this.composer.render();
        }
    }
}