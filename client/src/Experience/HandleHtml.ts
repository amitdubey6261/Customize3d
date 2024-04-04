// import { Materials } from "../Utils/Assets";
import { Materials2 } from "../Utils/Assets";

export default class HandleHTML {
    constructor() {
        this.handleAccordian();
        this.hgandleSofaSwatch();
    }

    handleAccordian() {
        const headerBtns = Array.from(document.getElementsByClassName('header')) as HTMLElement[];
        const headerChilds = Array.from(document.getElementsByClassName('header-child')) as HTMLElement[];

        headerBtns.forEach((elem, idx) => {
            elem.addEventListener('click', () => {
                const child = headerChilds[idx];
                if (child.style.height == '0px') {
                    child.style.height = 'fit-content';
                }
                else {
                    child.style.height = '0px';
                }
            })
        })
    }

    hgandleSofaSwatch() {
        // Materials.forEach((elem) => {
        //     const HtmlString = `<div class="image"><img class="sofa-images" src=${elem.base_texture} alt=""></div>`
        //     let range = document.createRange() ; 
        //     let frag = range.createContextualFragment(HtmlString) ; 
        //     const sofaContainer = document.getElementById('sofa-swatch') ; 
        //     sofaContainer?.appendChild( frag ) ; 
        // })

        Materials2.forEach((elem)=>{
            const HtmlString = `<div class="image"><img class="sofa-images" src=${elem.base.oneK} alt=""><div>` ; 
            let range = document.createRange() ; 
            let frag = range.createContextualFragment(HtmlString) ;

            const htmlname  = `<p class="image-name">${elem.name}</p>` ; 
            let range2 = document.createRange() ; 
            let frag2 = range2.createContextualFragment(htmlname) ; 

            const sofaContainer = document.getElementById('sofa-swatch') ;
            const woodSwatch = document.getElementById('wood-swatch') ; 
            const metalSwatch = document.getElementById('metal-swatch') ; 
            const glassSwatch = document.getElementById('glass-swatch') ; 

            if( elem.category == 'leather&fabric'){
                sofaContainer?.appendChild( frag ) ;
                sofaContainer?.appendChild( frag2 ) ; 
            }

            if( elem.category == 'wood'){
                woodSwatch?.appendChild( frag ) ;
                woodSwatch?.appendChild( frag2 ) ; 
            }

            if( elem.category == 'metal'){
                metalSwatch?.appendChild( frag ) ;
                metalSwatch?.appendChild( frag2 ) ; 
            }

            if( elem.category == 'glass'){
                glassSwatch?.appendChild( frag ) ;
                glassSwatch?.appendChild( frag2 ) ; 
            }

            if( elem.category == 'metal'){
                metalSwatch?.appendChild( frag ) ;
                metalSwatch?.appendChild( frag2 ) ; 
            }

        })
    }
}