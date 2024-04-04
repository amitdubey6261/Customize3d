import { EffectComposer } from "postprocessing";
import { defaultSSROptions, SSREffect } from 'screen-space-reflections';
import Experience from "./Experience";
import * as _ from 'three';

export default class PPS {
    experience: Experience;
    renderer: _.WebGLRenderer;
    scene: _.Scene;
    composer: EffectComposer;
    params: any;
    settings: any;
    enhanceShaderLightingOptions: any;
    envMapPos : _.Vector3 ; 
    envMapSize : _.Vector3 ; 

    constructor() {
        this.experience = new Experience();
        this.composer = this.experience.renderer.composer;

        this.params = {
            ...defaultSSROptions,
            ...{
                enabled: true,
                resolutionScale: 1,
                velocityResolutionScale: 1,
                correctionRadius: 2,
                blend: 0.95,
                correction: 0.1,
                blur: 0,
                blurSharpness: 10,
                blurKernel: 1,
                distance: 10,
                intensity: 1,
                exponent: 1.75,
                maxRoughness: 0.99,
                jitter: 0,
                jitterRoughness: 2,
                roughnessFade: 1,
                fade: 1.03,
                thickness: 3.5,
                ior: 1.75,
                //@ts-ignore
                fade: 0,
                steps: 5,
                refineSteps: 6,
                maxDepthDifference: 50,
                missedRays: false
            }
        }

        this.settings = {
            envMapPosX: 0,
            envMapPosY: 1,
            envMapPosZ: 0,
            envMapSizeX: 12,
            envMapSizeY: 3.90714,
            envMapSizeZ: 8.5,
            aoPower: 2,
            aoSmoothing: 0.43,
            aoMapGamma: 0.74,
            lightMapGamma: 1.21,
            lightMapSaturation: 1.09,
            envPower: 3.6,
            smoothingPower: 0.41000000000000003,
            roughnessPower: 1,
            sunIntensity: 0,
            aoColor: 13744018,
            aoColorSaturation: 0.4064516129032258,
            hemisphereColor: 2301734,
            irradianceColor: 9011574,
            radianceColor: 12222327,
            sunColor: 16777215,
            mapContrast: 0.77,
            lightMapContrast: 1.1500000000000001,
            irradianceIntensity: 0.44,
            radianceIntensity: 6.34
        }

        this.envMapPos = new _.Vector3(this.settings.envMapPosX, this.settings.envMapPosY, this.settings.envMapPosZ)
        this.envMapSize = new _.Vector3(this.settings.envMapSizeX, this.settings.envMapSizeY, this.settings.envMapSizeZ)

        this.enhanceShaderLightingOptions = {
            ...this.settings,
            ...{
                aoColor: new _.Color(this.settings.aoColor),
                hemisphereColor: new _.Color(this.settings.hemisphereColor),
                irradianceColor: new _.Color(this.settings.irradianceColor),
                radianceColor: new _.Color(this.settings.radianceColor)
            }
        }

    }
}

// import Experience from "./Experience";
// import * as PP from 'postprocessing';
// import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
// import {
//     MotionBlurEffect,
//     SSDGIEffect,
//     SSGIEffect,
//     SSREffect,
//     TRAAEffect,
//     VelocityDepthNormalPass,
// } from 'realism-effects'
// import { PerspectiveCamera, Scene } from "three";
// import { SSGIDebugGUI } from "./SSGIDebugGUI";

// export default class PostProcessing {
//     experience: Experience;
//     postprocessing: PP.EffectComposer;
//     scene: Scene;
//     camera: PerspectiveCamera;

//     bloomEffect: PP.BloomEffect;
//     vignetteEffect: PP.VignetteEffect;
//     velocityDepthNormalPass: any;
//     params: any;

//     ssgiEffect: any;
//     ssgiPass: any;
//     ssgdiPass: any;
//     motionBlurEffect: any;
//     traaEffect: any;
//     traaPass: any;
//     fxaaEffect: any;
//     fxaaPass: any;
//     ssrPass: any;

//     gui: GUI;
//     options: any;

//     constructor() {
//         this.experience = new Experience();
//         this.scene = this.experience.scene;
//         this.camera = this.experience.camera.camera;
//         this.postprocessing = this.experience.renderer.createComposer();
//         this.experience.renderer.enabled = false;

//         this.createPP();
//     }

//     createPP() {
//         this.params = {
//             gi: 'SSGI',
//             AA: 'FXAA',
//             motionBlur: true,
//             bloom: true,
//             postprocessingEnabled: false,
//             groundProjection: true,
//         }

//         this.options = {
//             distance: 3,
//             thickness: 3,
//             autoThickness: false,
//             maxRoughness: 1,
//             blend: 0.95,
//             denoiseIterations: 3,
//             denoiseKernel: 3,
//             denoiseDiffuse: 25,
//             denoiseSpecular: 25.54,
//             depthPhi: 5,
//             normalPhi: 28,
//             roughnessPhi: 18.75,
//             envBlur: 0.55,
//             importanceSampling: true,
//             directLightMultiplier: 1,
//             maxEnvLuminance: 50,
//             steps: 20,
//             refineSteps: 4,
//             spp: 1,
//             resolutionScale: 1,
//             missedRays: false,
//         }

//         this.velocityDepthNormalPass = new VelocityDepthNormalPass(this.scene, this.camera)

//         this.ssgiEffect = new SSGIEffect(this.scene, this.camera, this.velocityDepthNormalPass, this.options)
//         this.ssgiPass = new PP.EffectPass(this.camera, this.ssgiEffect)
//         this.ssgdiPass = new PP.EffectPass(this.camera, new SSDGIEffect(this.scene, this.camera, this.velocityDepthNormalPass, this.options))
//         this.ssrPass = new PP.EffectPass(this.camera, new SSREffect(this.scene, this.camera, this.velocityDepthNormalPass, this.options))

//         this.motionBlurEffect = new MotionBlurEffect(this.velocityDepthNormalPass)

//         this.traaEffect = new TRAAEffect(this.scene, this.camera, this.velocityDepthNormalPass)
//         this.traaPass = new PP.EffectPass(this.camera, this.traaEffect)
//         this.fxaaEffect = new PP.FXAAEffect()
//         this.fxaaPass = new PP.EffectPass(this.camera, this.fxaaEffect)

//         this.postprocessing.addPass(this.ssgiPass);

//         this.gui = new GUI();
//         const GI_OPTIONS = ['SSGI', 'SSGDI', 'SSR', 'DEFAULT']
//         const AA_OPTIONS = ['NONE', 'TRAA', 'FXAA']
//         const folder = this.gui.addFolder('Post');
//         folder.open();
//         folder.add(this.params, 'postprocessingEnabled')
//         folder.add(this.params, 'gi', GI_OPTIONS).onChange(this.updateEffectsStack)
//         folder.add(this.params, 'motionBlur').onChange(this.updateEffectsStack)
//         folder.add(this.params, 'bloom').onChange(this.updateEffectsStack)
//         folder.add(this.params, 'AA', AA_OPTIONS).onChange(this.updateEffectsStack)
//         new SSGIDebugGUI(folder, this.ssgiEffect, this.options)

//     }

//     updateEffectsStack = () => {
//         this.postprocessing.removeAllPasses()
//         this.postprocessing.addPass(this.velocityDepthNormalPass)
//         const effectArray = []

//         // Add ssgi pass alone in a single effectPass
//         switch (this.params.gi) {
//             case 'SSGI': {
//                 this.postprocessing.addPass(this.ssgiPass)
//                 break
//             }
//             case 'SSGDI': {
//                 this.postprocessing.addPass(this.ssgdiPass)
//                 break
//             }
//             case 'SSR': {
//                 this.postprocessing.addPass(this.ssrPass)
//                 break
//             }
//             default: {
//                 break
//             }
//         }

//         if (this.params.bloom) {
//             effectArray.push(this.bloomEffect)
//         }

//         switch (this.params.AA) {
//             case 'TRAA':
//                 // composer.addPass(traaPass)
//                 effectArray.push(this.traaEffect)
//                 break

//             case 'FXAA':
//                 this.postprocessing.addPass(this.fxaaPass)
//                 // effectArray.push(fxaaEffect)
//                 break

//             default: {
//                 break
//             }
//         }

//         if (this.params.motionBlur) {
//             effectArray.push(this.motionBlurEffect)
//         }

//         if (effectArray.length) {
//             this.postprocessing.addPass(new PP.EffectPass(this.camera, ...effectArray))
//         }

//     }


// }