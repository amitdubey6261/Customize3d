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
        name : 'Rounded Sofa' , 
        model_ref : '' , 
        parent_container : 'Model-continer',  
        model_img : '/imgs/01.png' , 
        model_path : [
            '/models/Round_Sofa.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Rectangular Sofa' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/imgs/02.png' , 
        model_path : [
            '/models/Sectional_Sofa.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Table Sofa' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/imgs/03.png' , 
        model_path : [
            '/models/sofa_table_scene.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Table Sofa 02' , 
        model_ref : '' , 
        parent_container : 'Model-continer',
        model_img : '/imgs/04.png' , 
        model_path : [
            '/models/sofa_table_scene02.glb'
        ],
        group : 'sofa' , 
    } , 
    // {
    //     name : 'Default Sofa 2' , 
    //     model_ref : '' , 
    //     parent_container : 'Model-continer',
    //     model_img : 'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Sofa_Images/03.png' , 
    //     model_path : [
    //         'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Wood_Sofa_2.glb',
    //         'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Wood_Chair.glb'
    //     ],
    //     group : 'sofa' , 
    // } , 
    // {
    //     name : 'create&barrel01' , 
    //     model_ref : '' , 
    //     parent_container : 'Model-continer',
    //     model_img : 'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Sofa_Images/cb01.png' , 
    //     model_path : [
    //         'https://d2629xvaofl3d3.cloudfront.net/models/Create&Barrel/crate&barrel_Models/model_01.glb',
    //     ],
    //     group : 'sofa' , 
    // } , 
    // {
    //     name : 'create&barrel07' , 
    //     model_ref : '' , 
    //     parent_container : 'Model-continer',
    //     model_img : 'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Sofa_Images/cb07.png' , 
    //     model_path : [
    //         'https://d2629xvaofl3d3.cloudfront.net/models/Create&Barrel/crate&barrel_Models/model_07.glb',
    //     ],
    //     group : 'sofa' , 
    // } , 
]