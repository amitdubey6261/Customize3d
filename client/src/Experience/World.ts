import { GLTF } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import DragAndDrop from "./DragAndDrop";
import * as _ from 'three' ; 

export default class World{
    experience : Experience ; 
    loadedmodels : Map<string , GLTF> ; 
    DragAndDrop : DragAndDrop ; 
    floor : _.Mesh ; 
    spinner : HTMLElement ; 
    constructor(){
        this.experience = new Experience() ; 
        this.init() ; 
    }
    
    async init(){
        // this.DragAndDrop.handleDragAndDrop() ; 
    }
}