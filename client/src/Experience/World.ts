import { GLTF } from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import DragAndDrop from "./DragAndDrop";
import { createSubsurfaceMaterial, replaceMaterial } from "./CustomMaterial";
import * as _ from 'three' ; 

export default class World{
    experience : Experience ; 
    loadedmodels : Map<string , GLTF> ; 
    DragAndDrop : DragAndDrop ; 
    floor : _.Mesh ; 
    constructor(){
        this.experience = new Experience() ; 
        this.init() 
    }
    
    async init(){
        this.loadedmodels = await this.experience.resources.loadglTF() ;
        const subsurfaceMaterial = createSubsurfaceMaterial() ; 
        const lamp = this.loadedmodels.get('Floor_Lamp') as GLTF ; 
        replaceMaterial( lamp.scene , subsurfaceMaterial ) ;  
        this.DragAndDrop = new DragAndDrop() ; 
        this.DragAndDrop.handleDragAndDrop() ; 
    }
}