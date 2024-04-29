
import CreateMaterial from "./CreateMaterial";
import Experience from "./Experience";

export default class DragAndDrop {
    experience: Experience;
    customMaterial : CreateMaterial ; 

    constructor() {
        this.experience = new Experience();
        this.customMaterial = this.experience.customMaterial; 
        this.handleMaterialDragAndDrop() ; 
        this.handleModelDragAndDrop() ; 
    }

    handleMaterialDragAndDrop(){
        const images = document.getElementsByClassName('material-thubnail') ; 
        Array.from(images).map((elem)=>{
            elem.addEventListener('dragend' , ()=>{
                const idx = elem.getAttribute('uid') ; 
                this.customMaterial.ApplyMaterial(Number(idx)) ; 
            })
        })
    }

    handleModelDragAndDrop(){
        const modelImages = document.getElementsByClassName('model-thumbnail') ; 
        Array.from(modelImages).map((elem)=>{
            elem.addEventListener('dragend' , ()=>{
                const idx = elem.getAttribute('uid') ; 
                this.experience.resources.loadGltf(Number(idx)) ; 
            })
        })
    }
}