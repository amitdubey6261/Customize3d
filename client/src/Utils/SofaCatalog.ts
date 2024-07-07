export type sofa_data = {
    name : string , 
    model_ref : string , 
    parent_container : string , 
    model_img : string , 
    model_path : string[], 
    group : 'sofa' | 'table' | null 
}

export const sofa_models : sofa_data[] = [
    {
        name : 'Rounded' , 
        model_ref : '' , 
        parent_container : 'SofaContainer',  
        model_img : 'https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/4.webp' , 
        model_path : [
            'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sofa_Set2.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Rectangular' , 
        model_ref : '' , 
        parent_container : 'SofaContainer',
        model_img : 'https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/5.webp' , 
        model_path : [
            'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sectional_Sofa.optimized.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Table' , 
        model_ref : '' , 
        parent_container : 'SofaContainer',
        model_img : 'https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/6.webp' , 
        model_path : [
            'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Sofa_Set.glb'
        ],
        group : 'sofa' , 
    } , 
    {
        name : 'Table 02' , 
        model_ref : '' , 
        parent_container : 'SofaContainer',
        model_img : 'https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/7.webp' , 
        model_path : [
            'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Wooden_Sofa.glb'
        ],
        group : 'sofa' , 
    } , 
]