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
]