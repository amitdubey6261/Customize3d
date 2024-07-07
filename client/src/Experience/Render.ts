import * as _ from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

import Experience from './Experience';
import { OutputPass, RenderPass, SSAOPass, TAARenderPass, UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js';

export default class Render {
    experience: Experience;
    renderer: _.WebGLRenderer;
    ComposerEnabled: boolean;
    composer: EffectComposer;
    camera: _.PerspectiveCamera;
    scene: _.Scene;
    taaRenderPass: TAARenderPass;
    bloompass: UnrealBloomPass;
    gui: GUI;

    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera.camera;
        this.ComposerEnabled = false;
        this.createRenderer();
        this.createComposer();
        this.OnOFFPostprocessing();
        this.HDRIControl();
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
        this.renderer.toneMappingExposure = .4;
        this.renderer.autoClear = true;
        this.gui = this.experience.gui;
    }

    createComposer() {
        this.composer = new EffectComposer(this.renderer);

        const size = new _.Vector2();
        this.renderer.getSize(size);
        this.composer.setPixelRatio(1);

        const renderPass = new RenderPass(this.scene, this.camera);
        renderPass.clearAlpha = 0;
        this.composer.addPass(renderPass);

        const bloomPass = new UnrealBloomPass( new _.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        bloomPass.threshold = 0;
        bloomPass.strength = .1;
        bloomPass.radius = 0;
        this.composer.addPass(bloomPass)

        const ssaoPass = new SSAOPass(this.scene, this.camera, size.width, size.height);
        this.composer.addPass(ssaoPass);
        ssaoPass.output = SSAOPass.OUTPUT.Default; // SSAOPass.OUTPUT.Depth SSAOPass.OUTPUT.Normal  //SSAOPass.OUTPUT.Blur //SSAOPass.OUTPUT.SSAO //SSAOPass.OUTPUT.Default
        ssaoPass.kernelRadius = 1;
        ssaoPass.minDistance = 0.0001;
        ssaoPass.maxDistance = 1;

        const ssao = document.querySelector('#ssao-btn') as HTMLInputElement;
        ssao.addEventListener('input', () => {
            if (ssao.checked) {
                this.composer.addPass(ssaoPass);
            }
            else {
                this.composer.removePass(ssaoPass);
            }
        })

        const outputPass = new OutputPass();
        this.composer.addPass(outputPass);

        return this.composer;
    }

    OnOFFPostprocessing() {
        const elem = document.querySelector('#pp-btn') as HTMLInputElement;
        elem?.addEventListener('click', () => {
            if (elem.checked) {
                this.ComposerEnabled = true;
            }
            else {
                this.ComposerEnabled = false;
            }
        })
    }

    HDRIControl() {
        const elem = document.querySelector('#customRange3') as HTMLInputElement;
        elem.addEventListener('input', (e) => {
            //@ts-ignore
            this.renderer.toneMappingExposure = e.target.value;
        })
    }

    render() {
        if( this.ComposerEnabled ){
            if( this.composer ){
                this.composer.render() ; 
            }
        }
        else{
            this.renderer.render(this.experience.scene, this.experience.camera.camera);
        }
    }
}