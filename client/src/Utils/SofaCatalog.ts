export type sofa_data = {
    name : string , 
    model_ref : string , 
    parent_container : string , 
    model_img : string , 
    model_path : string[], //more than 1 model 
    group : 'sofa' | 'table' | null 
}

export const sofa_models : sofa_data[] = [
    {
        name : 'Wooden Sofa' , 
        model_ref : '' , 
        parent_container : 'Model-continer',  
        model_img : '/models/Sofa_Models/Sofa_Images/01.png' , 
        model_path : [
            '/models/Sofa_Models/Wood_Sofa.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Default Sofa' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/02.png' , 
        model_path : [
            '/models/Sofa_Models/Sofa.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Default Sofa 2' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/03.png' , 
        model_path : [
            '/models/Sofa_Models/Wood_Sofa_2.glb',
            '/models/Sofa_Models/Wood_Chair.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel01' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb01.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_01.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel02' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb02.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_02.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel04' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb04.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_04.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel05' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb05.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_05.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel06' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb06.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_06.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel07' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb07.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_07.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel08' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb08.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_08.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel09' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb09.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_09.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel10' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb10.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_10.glb',
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'create&barrel11' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/models/Sofa_Models/Sofa_Images/cb11.png' , 
        model_path : [
            '/models/Create&Barrel/crate&barrel_Models/model_11.glb',
        ],
        group : 'sofa' , 
    } , 
]