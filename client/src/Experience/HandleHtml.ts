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

    setPreLoading(){
        const elements = document.getElementsByClassName('preload') ; 
        const elem = document.querySelector('.spinner') as HTMLInputElement ; 
        const elem2 = document.querySelector('.overlay') as HTMLInputElement ; 

        const callBack = async (event:any)=> {
            const preLoaderOf = event.target.getAttribute('preloaderOf') ; 
            elem.style.display = 'block' ;  
            elem2.style.display = 'block' ; 
            await this.experience.resources.LoadTexturesOfCategory(preLoaderOf) ; 
            event.target.removeEventListener('click', callBack);
            elem.style.display = 'none' ;  
            elem2.style.display = 'none' ; 
        }

        Array.from(elements).forEach((elem:any) => {
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
        
        // handleAccordian() {
        //     const headerBtns = Array.from(document.getElementsByClassName('header')) as HTMLElement[];
        //     const headerChilds = Array.from(document.getElementsByClassName('header-child')) as HTMLElement[];
    
        //     headerBtns.forEach((elem, idx) => {
        //         elem.addEventListener('click', () => {
        //             const child = headerChilds[idx];
        //             if (child.style.height == '0px') {
        //                 child.style.height = 'fit-content';
        //             }
        //             else {
        //                 child.style.height = '0px';
        //             }
        //         })
        //     })
        // }
        
        // Materials2.forEach((elem)=>{
        //     const HtmlString = `<div class="image"><img class="sofa-images" src=${elem.base?.oneK} alt=""><div>` ; 
        //     let range = document.createRange() ; 
        //     let frag = range.createContextualFragment(HtmlString) ;

        //     const htmlname  = `<p class="image-name">${elem.name}</p>` ; 
        //     let range2 = document.createRange() ; 
        //     let frag2 = range2.createContextualFragment(htmlname) ; 

        //     const sofaContainer = document.getElementById('sofa-swatch') ;
        //     const woodSwatch = document.getElementById('wood-swatch') ; 
        //     const metalSwatch = document.getElementById('metal-swatch') ; 
        //     const glassSwatch = document.getElementById('glass-swatch') ; 

        //     if( elem.category == 'leather&fabric'){
        //         sofaContainer?.appendChild( frag ) ;
        //         sofaContainer?.appendChild( frag2 ) ; 
        //     }

        //     if( elem.category == 'wood'){
        //         woodSwatch?.appendChild( frag ) ;
        //         woodSwatch?.appendChild( frag2 ) ; 
        //     }

        //     if( elem.category == 'metal'){
        //         metalSwatch?.appendChild( frag ) ;
        //         metalSwatch?.appendChild( frag2 ) ; 
        //     }

        //     if( elem.category == 'glass'){
        //         glassSwatch?.appendChild( frag ) ;
        //         glassSwatch?.appendChild( frag2 ) ; 
        //     }

        //     if( elem.category == 'metal'){
        //         metalSwatch?.appendChild( frag ) ;
        //         metalSwatch?.appendChild( frag2 ) ; 
        //     }
        // })
    }
}