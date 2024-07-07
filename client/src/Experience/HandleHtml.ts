import { MaterialDir } from "../Utils/Assets";
import { sofa_data, sofa_models } from "../Utils/SofaCatalog";
import Experience from "./Experience";
import * as _ from 'three' ; 

export default class HandleHTML {
    experience: Experience;
    downloadStartedSofa: boolean;
    sunlight : _.DirectionalLight ; 
    day : boolean ; 

    constructor() {
        this.experience = new Experience();
        this.sunlight = this.experience.env.sunlight ; 
        this.setPreLoading();
        this.hgandleSwatch();
        this.handleModels();
        this.handleAccordian();
        this.handleDayLight();
        this.handleFSc();
        this.handlePrompt() ; 
        this.day = true ; 
    }

    handleFSc() {
        const elem = document.querySelector('#ic-2');
        const elem2 = document.querySelector('#canvas') as HTMLCanvasElement ;
        elem?.addEventListener('click', () => {
            if (elem2.requestFullscreen) {
                elem2.requestFullscreen();
            }
        })
    }

    handleDayLight() {
        const slider_in = document.querySelector('#dn-slider') as HTMLElement;
        const slider = document.querySelector('.day-night') as HTMLElement;
        const elem = document.getElementById('lamp-btn') as HTMLInputElement ; 

        slider.style.transition = 'all 0.3s ease-in-out';
        slider_in.style.transition = 'all 0.3s ease-in-out';

        let clbk = () => {
            this.day = !this.day;
            if (this.day) {
                slider_in.style.transform = 'translateX(20px)';
                slider_in.style.background = 'radial-gradient(circle, rgba(255,142,0,1) 32%, rgba(255,216,80,1) 62%)';
                slider.style.background = 'linear-gradient(90deg, rgba(255,112,80,1) 34%, rgba(255,153,80,1) 63%)';
                this.experience.renderer.renderer.toneMappingExposure = .4;
                this.sunlight.intensity = 12 ; 
                this.experience.resources.lampLight.intensity = 0 ; 
                elem.checked = false ; 
            }
            else {
                slider_in.style.transform = 'translateX(0px)';
                slider_in.style.background = 'radial-gradient(circle, rgb(243, 243, 243) 32%, rgb(247, 243, 229) 62%)';
                slider.style.background = 'linear-gradient(90deg, rgb(73, 73, 73) 34%, rgb(66, 66, 66) 63%)';
                this.experience.renderer.renderer.toneMappingExposure = .2;
                this.sunlight.intensity = 0 ; 
                this.experience.resources.lampLight.intensity = 20 ; 
                elem.checked = true ; 
            }
        }

        slider_in.addEventListener('click', clbk);
    }

    handleAccordian() {
        const accordian = document.querySelector('.ui') as HTMLElement;
        const ac_btn = document.getElementById('ic-1') as HTMLElement;
        const ac_btn_2 = document.querySelector('.cl-icon') as HTMLElement;
        let open = true;

        const clbk = () => {
            open = !open;
            if (open) {
                accordian.style.transform = 'translateX(0px)';
            }
            else {
                accordian.style.transform = 'translateX(180px)';
            }
        }

        ac_btn.addEventListener('click', clbk)
        ac_btn_2.addEventListener('click', clbk)
    }

    setPreLoading() {
        const elements = document.getElementsByClassName('accordion-button');

        const callBack = async (event: any) => {
            const preLoaderOf = event.target.getAttribute('preloaderOf');
            const tarspinner = document.querySelector(`.${preLoaderOf} > .bspineer `) as HTMLElement ; 
            const overlay = document.querySelector(`.${preLoaderOf} > .accordian-overlay `) as HTMLElement ; 
            tarspinner.style.display = 'block';
            overlay.style.display = 'block';
            const tex = await this.experience.resources.LoadTexturesOfCategory(preLoaderOf); 
            console.log(tex);
            event.target.removeEventListener('click', callBack);
            tarspinner.style.display = 'none';
            overlay.style.display = 'none';
        }

        Array.from(elements).forEach((elem: any) => {
            elem.addEventListener('click', callBack);
        });
    }

    hgandleSwatch() {
        MaterialDir.forEach((elem, idx) => {

            const htmlString = `<div class="thumbnail">
                <div class="thumb-container">
                  <img class="material-thubnail" uid=${idx} src=${elem.img_ref}>
                </div>
                <p class="thumb-name">${elem.name}</p>
              </div> `

            let range = document.createRange();
            let frag = range.createContextualFragment(htmlString);

            const container = document.querySelector(`.${elem.parnetContainer}`);

            container?.appendChild(frag)
        })  
    }

    handleModels() {
        sofa_models.forEach((elem: sofa_data, idx) => {
            const htmlString = `<div class="thumbnail ">
                <div class="thumb-container">
                  <img class="model-thumb" uid=${idx} src=${elem.model_img}>
                </div>
                <p class="thumb-name">${elem.name}</p>
              </div> `

            const range = document.createRange();
            const frag = range.createContextualFragment(htmlString);

            const container = document.querySelector(`.${elem.parent_container}`);
            container?.appendChild(frag);
        })
    }

    handlePrompt(){
    }
}