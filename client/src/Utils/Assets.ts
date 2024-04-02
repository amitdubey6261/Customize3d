import * as _ from 'three';

export type datatype = {
    name: string,
    path: string,
}

export const data: datatype[] = [
    {
        name: 'Wall',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Wall.glb',
    },
    {
        name: 'Floor',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor.glb',
    },
    {
        name: 'Frame',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Frame.glb',
    },
    {
        name: 'Coffee_Table',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Coffee_Table.glb',
    },
    {
        name: 'Floor_Lamp',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor_Lamp.glb',
    },
    {
        name: 'Window',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Window.glb',
    },
    {
        name: 'Sofa',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Sofa.glb',
    },
]


export type hdritype = {
    name: string,
    path: { hdri: string, texture: string },
    hdricoords: { radius: number, height: number },
}

export const hdridata: hdritype[] = [
    {
        name: 'DancingHall',
        path: {
            hdri: 'HDRI/HDRI.exr',
            texture: 'HDRI/HDRI.avif',
        },
        hdricoords: {
            radius: 20,
            height: 3,
        }
    }
]

export type CustomMaterial = {
    name: string,
    category: string,
    ref_image: string,
    tiling: {
        x: number,
        y: number,
    },
    base_texture: string,
    normal_texture: string,
    height_texture: string,
    roughness_texture: string,
    metalic_texture: string,
    ao_texture: string,
    opacity_texture: string,
    specular_texture: string,
}

export const Materials: CustomMaterial[] = [
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material1/base.png',
        normal_texture: 'Textures/Material1/normal.png',
        height_texture: 'Textures/Material1/height.png',
        roughness_texture: 'Textures/Material1/rough.png',
        metalic_texture: 'Textures/Material1/opacity.png',
        ao_texture: 'Textures/Material1/ao.png',
        opacity_texture: 'Textures/Material1/metal.png',
        specular_texture: 'Textures/Material1/specular.png'
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 4,
            y: 4,
        },
        base_texture: 'Textures/Material2/base.png',
        normal_texture: 'Textures/Material2/normal.png',
        height_texture: 'Textures/Material2/height.png',
        roughness_texture: 'Textures/Material2/rough.png',
        metalic_texture: 'Textures/Material2/metal.png',
        ao_texture: 'Textures/Material2/ao.png',
        opacity_texture: 'Textures/Material2/opacity.png',
        specular_texture: 'Textures/Material2/specular.png'
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material4/base.jpg',
        normal_texture: 'Textures/Material4/normal.jpg',
        height_texture: 'Textures/Material4/height.jpg',
        roughness_texture: 'Textures/Material4/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material5/base.jpg',
        normal_texture: 'Textures/Material5/normal.jpg',
        height_texture: 'Textures/Material5/height.jpg',
        roughness_texture: 'Textures/Material5/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material6/base.jpg',
        normal_texture: 'Textures/Material6/normal.jpg',
        height_texture: 'Textures/Material6/height.jpg',
        roughness_texture: 'Textures/Material6/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material7/base.jpg',
        normal_texture: 'Textures/Material7/normal.jpg',
        height_texture: 'Textures/Material7/height.jpg',
        roughness_texture: 'Textures/Material7/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material8/base.jpg',
        normal_texture: 'Textures/Material8/normal.jpg',
        height_texture: 'Textures/Material8/height.jpg',
        roughness_texture: 'Textures/Material8/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material9/base.jpg',
        normal_texture: 'Textures/Material9/normal.jpg',
        height_texture: 'Textures/Material9/height.jpg',
        roughness_texture: 'Textures/Material9/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Leather',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material10/base.jpg',
        normal_texture: 'Textures/Material10/normal.jpg',
        height_texture: 'Textures/Material10/height.jpg',
        roughness_texture: 'Textures/Material10/rough.jpg',
        metalic_texture: '',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Metal',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material11/base.jpg',
        normal_texture: 'Textures/Material11/normal.jpg',
        height_texture: 'Textures/Material11/height.jpg',
        roughness_texture: 'Textures/Material11/rough.jpg',
        metalic_texture: 'Textures/Material11/metal.jpg',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Metal',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material12/base.jpg',
        normal_texture: 'Textures/Material12/normal.jpg',
        height_texture: 'Textures/Material12/height.jpg',
        roughness_texture: 'Textures/Material12/rough.jpg',
        metalic_texture: 'Textures/Material12/metal.jpg',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
    {
        name: 'Calfskin_Leather',
        category: 'Metal',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material3/base.png',
        normal_texture: 'Textures/Material3/normal.png',
        height_texture: 'Textures/Material3/height.png',
        roughness_texture: 'Textures/Material3/rough.png',
        metalic_texture: 'Textures/Material3/metal.png',
        ao_texture: 'Textures/Material3/ao.png',
        opacity_texture: 'Textures/Material3/opacity.png',
        specular_texture: 'Textures/Material3/specular.png'
    },
    {
        name: 'Calfskin_Leather',
        category: 'Metal',
        ref_image: 'https://d2629xvaofl3d3.cloudfront.net/Bull_Leather.png',
        tiling: {
            x: 5,
            y: 5,
        },
        base_texture: 'Textures/Material13/base.jpg',
        normal_texture: 'Textures/Material13/normal.jpg',
        height_texture: 'Textures/Material13/height.jpg',
        roughness_texture: 'Textures/Material13/rough.jpg',
        metalic_texture: 'Textures/Material13/metal.jpg',
        ao_texture: '',
        opacity_texture: '',
        specular_texture: ''
    },
]

export type CustomMaterial2 = {
    name: string,
    img_ref: string,
    category: string,
    targetGLBModel: {
        name: string,
        targetOnly: string[],
    },
    base: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    normal: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    metal: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    rough: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    Ao: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    opacity: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    specular: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    height: {
        oneK: string,
        twoK: string,
        threeK: string,
    },
    tiling: {
        x: 5,
        y: 5,
    }
}

export const Materials2: CustomMaterial2[] = [
    {
        name: 'bull_leather',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/bull_leather/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'calfskin_leather',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/base.jpg',
            threeK: 'materials/leatherAndfabric/calfskin_leather/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'cotton_rich_tricotine_weave',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/cotton_rich_tricotine_weave/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'satin_fabric',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'jersey_stitch_fabric',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/satin_fabric/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'bamboo_wood_varnished',
        category: 'wood',
        targetGLBModel : {
            name : 'Floor' , 
            targetOnly : [] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/bamboo_wood_varnished/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'natural_cross_laminated_wood',
        category: 'wood',
        targetGLBModel : {
            name : 'Floor' , 
            targetOnly : [] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/pine_wood/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'abandoned_factory_tiled_floor',
        category: 'wood',
        targetGLBModel : {
            name : 'Floor' , 
            targetOnly : [] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/abandoned_factory_tiled_floor/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'natural_cross_laminated_wood',
        category: 'wood',
        targetGLBModel : {
            name : 'Floor' , 
            targetOnly : [] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/wood/natural_cross_laminated_wood/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'steel',
        category: 'metal',
        targetGLBModel : {
            name : 'Coffee_Table' , 
            targetOnly : ['Box002' , 'Box003' , 'Circle001'] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/steel/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'copper',
        category: 'metal',
        targetGLBModel : {
            name : 'Coffee_Table' , 
            targetOnly : ['Box002' , 'Box003' , 'Circle001'] , 
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/2K/jpeg/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/2K/jpeg/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/2K/jpeg/ao.jpg',
            threeK: 'materials/metal/copper/4K/jpeg/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/1K/jpeg/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/2K/jpeg/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/height.jpg',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
]