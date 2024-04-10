// import { Materials } from "../Utils/Assets";
import { Materials2 } from "../Utils/Assets";
import Experience from "./Experience";

export default class HandleHTML {
    experience: Experience;
    downloadStartedSofa: boolean;

    constructor() {
        this.experience = new Experience();
        this.setPreLoading();
        this.hgandleSwatch();
    }

    setPreLoading() {
        const elements = document.getElementsByClassName('preload');
        const elem = document.querySelector('.spinner') as HTMLInputElement;

        const callBack = async (event: any) => {
            const preLoaderOf = event.target.getAttribute('preloaderOf');
            elem.style.display = 'block';
            await this.experience.resources.LoadTexturesOfCategory(preLoaderOf);
            event.target.removeEventListener('click', callBack);
            elem.style.display = 'none';
        }

        Array.from(elements).forEach((elem: any) => {
            elem.addEventListener('click', callBack);
        });
    }

    hgandleSwatch() {
        Materials2.forEach((elem, idx) => {

            const htmlString = `<div class="">
            <img src=${elem.base.oneK}
              class="img-thumbnail"
              uid=${idx}
            alt="Loading..">
            <p>${elem.name}</p>
          </div> `

            let range = document.createRange();
            let frag = range.createContextualFragment(htmlString);

            const container = document.getElementById(`${elem.parnetContainer}`);
            container?.appendChild(frag)
        })
    }
}