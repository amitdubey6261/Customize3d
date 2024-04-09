
import CreateMaterial from "./CreateMaterial";
import Experience from "./Experience";

export default class DragAndDrop {
    experience: Experience;
    customMaterial : CreateMaterial ; 

    constructor() {
        this.experience = new Experience();
        this.customMaterial = this.experience.customMaterial; 
    }

    handleDragAndDrop() {
        const images = document.getElementsByClassName('img-thumbnail') ; 
        Array.from(images).map((elem)=>{
            elem.addEventListener('dragend' , ()=>{
                const idx = elem.getAttribute('uid') ; 
                this.customMaterial.ApplyMaterial(Number(idx)) ; 
            })
        })
    }

}