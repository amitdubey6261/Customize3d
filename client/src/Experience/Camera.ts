import * as _ from 'three';
import Experience from './Experience';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as TWEEN from '@tweenjs/tween.js';

export default class Camera {
    experience: Experience;
    camera: _.PerspectiveCamera;
    controls: OrbitControls;
    canvas: HTMLElement
    constructor() {
        this.experience = new Experience();
        this.camera = new _.PerspectiveCamera(50, window.innerWidth / window.innerHeight, .1, 200);
        this.camera.position.set(0, .1, -.3);
        this.canvas = this.experience.canvas as HTMLElement;
        this.AnimateCamera();
    }

    intitOrbit() {
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.05
        this.controls.minDistance = .1
        this.controls.maxDistance = 3.2
        this.controls.maxPolarAngle = Math.PI / 2
        this.controls.target.set(0, 1.5, -3)
    }

    update() {
        this.controls.update();
        TWEEN.update() ; 
    }

    AnimateCamera() {
        const data = [
            {
                pos: {
                    "x": 4.138464257057316e-17,
                    "y": 1.5000000000000004,
                    "z": 0.041381265149109225
                }
                ,
                tar:
                {
                    "x": 0,
                    "y": 1.5000000000000002,
                    "z": -3.0000000000000004
                },
            },
            {
                pos: {
                    "x": -0.15215379941525375,
                    "y": 1.9069616650795962,
                    "z": -2.063677551788394
                }
                ,
                tar: {
                    "x": -0.12148439456648301,
                    "y": 1.4309654725351013,
                    "z": -2.983091799728037
                },
            },
            {
                pos: {
                    "x": 2.3561598752269672,
                    "y": 1.7742367280563798,
                    "z": -0.6143061820787554
                },
                tar: {
                    "x": -0.5222118694065627,
                    "y": 1.682788105101223,
                    "z": -2.009517008102871
                },
            },
            {
                pos: {
                    "x": -0.6198029200594396,
                    "y": 1.2564659560216311,
                    "z": -6.302931522472733
                }
                ,
                tar: {
                    "x": -0.6394068630299499,
                    "y": 1.256465956021631,
                    "z": -3.5594015617433006
                },
            },
        ]

        const tweeer = (pos: any, tar: any) => {

            new TWEEN.Tween(this.camera.position).to(
                pos,
                1000
            ).easing(TWEEN.Easing.Linear.InOut)
                .start()

            new TWEEN.Tween(this.controls.target).to(
                tar,
                1000
            ).easing(TWEEN.Easing.Linear.InOut)
                .start()
        }

        const handleEvent = () => {
            const elems = document.getElementsByClassName('cameraVp');
            Array.from(elems).forEach((e: any, idx: any) => {
                e.addEventListener('click', () => {
                    console.log('click', idx);
                    if (idx == 0) {
                        tweeer(data[0].pos, data[0].tar);
                    }
                    if (idx == 1) {
                        tweeer(data[1].pos, data[1].tar);
                    }
                    if (idx == 2) {
                        tweeer(data[2].pos, data[2].tar);
                    }
                    if (idx == 3) {
                        tweeer(data[3].pos, data[0].tar);
                    }
                })
            })
        }

        handleEvent()
    }
}