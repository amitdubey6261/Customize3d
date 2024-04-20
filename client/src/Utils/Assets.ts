import * as _ from 'three';

export type datatype = {
    name: string,
    path: string,
    group : 'sofa' | 'table' | null , 
}

export const data: datatype[] = [
    {
        name: 'Carpet',
        path: "/models/Carpet.glb",
        group : null,
    }
    ,
    {
        name: 'Wall',
        path: '/models/Wall.glb',
        group : null,
    },
    {
        name: 'window',
        path: '/models/Window.glb',
        group : null,

    },
    // {
    //     name: 'Wood_Table',
    //     path: '/models/Wood_Table.glb',
    //     group : 'table',
    // },
    {
        name: 'Floor',
        path: '/models/Floor.glb',
        group : null,
    },
    {
        name: 'Sofa',
        path: '/models/Sofa_Models/Wood_Sofa.glb',
        group : 'sofa',
    },
    {
        name: 'Frames',
        path: '/models/Frames.glb',
        group : null,
    },
    {
        name: 'Floor_Lamp',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor_Lamp.glb',
        group : null,
    }
]
// export const data: datatype[] = [
//     {
//         name: 'Wall',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Wall.glb',
//     },
//     {
//         name: 'Floor',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Floor.glb',
//     },
//     {
//         name: 'Frame',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Frame.glb',
//     },
//     {
//         name: 'Floor_Lamp',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Floor_Lamp.glb',
//     },
//     {
//         name: 'Coffee_Table',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Coffee_Table.glb',
//     },
//     {
//         name: 'Window',
//         path: 'models/Window.glb',
//         // path: 'https://d2629xvaofl3d3.cloudfront.net/Window.glb',
//     },
//     {
//         name: 'Sofa',
//         path: 'https://d2629xvaofl3d3.cloudfront.net/Sofa.glb',
//     },
//     {
//         name: 'Sofa2',
//         path: '/models/Wood_Sofa.glb',
//     },
// ]


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

export type CustomMaterial2 = {
    name: string,
    img_ref: string,
    category: string,
    parnetContainer: string,
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
        x: number,
        y: number,
    }
}

export const Materials2: CustomMaterial2[] = [

    {
        name: 'Boysenberry Resonance',
        category: 'fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/metalic.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Boysenberry_Resonance/4k/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Cerulean Crossing',
        parnetContainer : 'Fabric',
        category: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4K/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4k/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cerulean_Crossing/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Cotton Rich Tricotine Weave',
        category: 'Fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2K/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4K/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cotton_rich_tricotine_weave/4k/height.jpg',
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
        name: 'Neptune Slant',
        category: 'Fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4K/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4k/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4K/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Neptune_Slant/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Satin Fabric',
        category: 'fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/satin_fabric/4K/height.jpg',
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
        name: 'Urban Orange AireWeave',
        category: 'fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Urban_Orange_AireWeave/4k/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Willow Wishper',
        category: 'fabric',
        parnetContainer : 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/metalic.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/metalic.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/metalic.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Willow_Wishper/4k/height.jpg',
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
            x: 10,
            y: 10
        }
    },




    {
        name: 'Blue Fabric',
        category: 'Fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueFabric/4K/height.jpg',
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
        name: 'Dark Blue Fabric',
        parnetContainer: 'Fabric',
        category: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BluePattern/4K/height.jpg',
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
        name: 'Wool Fabric',
        category: 'Fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/BlueWool/4K/height.jpg',
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
        name: 'Check Pattern',
        category: 'Fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Pattern/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Polyster',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Polyster/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Red Checked',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'White Black Striped',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/whiteBlackThreaded/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'White Tiled',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/1K/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/2K/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/4K/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WhiteTiled/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Woven Red Fabric',
        category: 'fabric',
        parnetContainer: 'Wool',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/1K/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/2K/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/4K/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/WovenRed/4K/height.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Green Wool',
        category: 'fabric',
        parnetContainer: 'Wool',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/1K/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/2K/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/4K/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/1K/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/2K/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/4K/rough.jpg',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/1K/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/2K/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/greenWool/4K/height.jpg',
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
            x: 20,
            y: 20
        }
    },

    {
        name: 'Arturo Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Arturo_Leather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/LeatherMaterials/Arturo_Leather/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Laredo Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Laredo_Leather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/LeatherMaterials/Laredo_Leather/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Old English Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Old_English_Leather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/LeatherMaterials/Old_English_Leather/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Omni Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/LeatherMaterials/omni_leather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/omni_leather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/LeatherMaterials/omni_leather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/LeatherMaterials/omni_leather/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/LeatherMaterials/omni_leather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/LeatherMaterials/omni_leather/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: 'materials/LeatherMaterials/omni_leather/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/LeatherMaterials/omni_leather/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'Leather01',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather01/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather01/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather01/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather01/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather01/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather01/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather01/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather01/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather02',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather02/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather02/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather02/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather02/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather02/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather02/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather02/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather02/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather03',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather03/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather03/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather03/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather03/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather03/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather03/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather03/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather03/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather04',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather04/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather04/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather04/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather04/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather04/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather04/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather04/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather04/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather05',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather05/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather05/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather05/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather05/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather05/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather05/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather05/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather05/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather06',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather06/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather06/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather06/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather06/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather06/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather06/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather06/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather06/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather07',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather07/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather07/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather07/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather07/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather07/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather07/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather07/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather07/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather08',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather08/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather08/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather08/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather08/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather08/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather08/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather08/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather08/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather09',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather09/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather09/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather09/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather09/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather09/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather09/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather09/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather09/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather10',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather10/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather10/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather10/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather10/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather10/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather10/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather10/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather10/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather11',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather11/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather11/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather11/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather11/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather11/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather11/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather11/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather11/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather12',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather12/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather12/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather12/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather12/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather12/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather12/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather12/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather12/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather13',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather13/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather13/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather13/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather13/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather13/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather13/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather13/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather13/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather14',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather14/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather14/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather14/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather14/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather14/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather14/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather14/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather14/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather15',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather15/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather15/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather15/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather15/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather15/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather15/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather15/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather15/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather16',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather16/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather16/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather16/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather16/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather16/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather16/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather16/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather16/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather17',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather17/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather17/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather17/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather17/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather17/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather17/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather17/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather17/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Leather18',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/LeatherMaterials/Leather18/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/LeatherMaterials/Leather18/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/LeatherMaterials/Leather18/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '/materials/LeatherMaterials/Leather18/metal.png',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '/materials/LeatherMaterials/Leather18/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '/materials/LeatherMaterials/Leather18/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '/materials/LeatherMaterials/Leather18/specular.png',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: '/materials/LeatherMaterials/Leather18/opacity.png',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },

    {
        name: 'Sundance Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/saddle/4k/height.jpg',
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
        name: ' Astor Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/DeepForestGenuineLeather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/DeepForestGenuineLeather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/DeepForestGenuineLeather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Indigo Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: '/materials/IndigoGenuineLeather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: '/materials/IndigoGenuineLeather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: '/materials/IndigoGenuineLeather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/IndigoGenuineLeather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Sand Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/SandGenuinLeather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/SandGenuinLeather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/SandGenuinLeather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/SandGenuinLeather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Delgado Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'materials/DiegoLeather/base.png',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/DiegoLeather/normal.png',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/DiegoLeather/rough.png',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/DiegoLeather/ao.png',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Bull Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
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
        name: 'Calfskin Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/1K/jpeg/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/2K/jpeg/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/calfskin_leather/4K/jpeg/base.jpg',
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
        name: 'Blue Sude Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Blue_Suede_leather/base.jpeg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Blue_Suede_leather/normal.jpeg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Blue_Suede_leather/rough.jpeg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
    // {
    //     name: 'Claret Faux Leather',
    //     category: 'fabric',
    //     parnetContainer: 'Leather',
    //     img_ref: '',
    //     base: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/base.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/base.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/base.jpg',
    //     },
    //     normal: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/normal.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/normal.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/normal.jpg',
    //     },
    //     rough: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/rough.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/rough.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/rough.jpg',
    //     },
    //     metal: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/metal.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/metal.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/metal.jpg',
    //     },
    //     Ao: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/ao.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/ao.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/ao.jpg',
    //     },
    //     height: {
    //         oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/1k/height.png',
    //         twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/2k/height.jpg',
    //         threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/claret_faux/4k/height.jpg',
    //     },
    //     specular: {
    //         oneK: '',
    //         twoK: '',
    //         threeK: '',
    //     },
    //     opacity: {
    //         oneK: '',
    //         twoK: '',
    //         threeK: '',
    //     },
    //     tiling: {
    //         x: 5,
    //         y: 5
    //     }
    // },
    {
        name: 'Cobblestone Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/Cobblestone/4k/height.jpg',
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
        name: 'Lagoon Outback Faux Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/lagoon_outback_faux/4k/height.jpg',
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
        name: 'Cranberry Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/normal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/normal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/normal.jpg',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/rough.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/rough.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/rough.jpg',
        },
        metal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/metal.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/metal.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/metal.jpg',
        },
        Ao: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/ao.jpg',
        },
        height: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/1k/height.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/2k/height.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/cranberry/4k/height.jpg',
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
        name: 'Full Grain Brown',
        category: 'fabric',
        parnetContainer: 'Leather',

        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Full_Grain_Brown_leather/base.jpeg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Full_Grain_Brown_leather/normal.jpeg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Full_Grain_Brown_leather/rough.jpeg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Pattern Leather',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Pattern_leather/base.jpeg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Pattern_leather/normal.jpeg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/Materials_01_02_24/MaterialData/sofa/Pattern_leather/rough.jpeg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: '',
            twoK: '',
            threeK: '',
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
        name: 'Cotton Rich Tricotine Weave',
        category: 'fabric',
        parnetContainer: 'Wool',
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
        name: 'Jersey Stitch Fabric',
        category: 'fabric',
        parnetContainer: 'Fabric',
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
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/1K/jpeg/ao.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/2K/jpeg/ao.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/leatherAndfabric/jersey_stitch_fabric/4K/jpeg/ao.jpg',
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
        name: 'Bamboo Wood Varnished',
        category: 'wood',
        parnetContainer: 'Wood',
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
        name: 'Natural Cross Laminated Wood',
        category: 'wood',
        parnetContainer: 'Wood',
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
        name: 'Abandoned Factory Tiled Floor',
        category: 'wood',
        parnetContainer: 'Wood',
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
        name: 'Natural Cross Laminated Wood',
        category: 'wood',
        parnetContainer: 'Wood',
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
        name: 'Steel',
        category: 'metal',
        parnetContainer: 'Metal',
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
        name: 'Copper',
        category: 'metal',
        parnetContainer: 'Metal',
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
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/ao.jpg',
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
    {
        name: 'Plane Glass',
        category: 'Glass',
        parnetContainer: 'Glass',
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
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/metal/copper/4K/jpeg/ao.jpg',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Pattern',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/PatternGlass/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/PatternGlass/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/PatternGlass/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/PatternGlass/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/PatternGlass/Ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/PatternGlass/height.png',
            twoK: '',
            threeK: '',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Rohmbus Grilled',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Window_01/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Window_01/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Window_01/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Window_01/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Window_01/Ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Window_01/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/Glass_Window_01/opacity.jpg',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 10,
            y: 10
        }
    },
    {
        name: 'Vintage Glass',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Vintage/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Vintage/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Vintage/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Vintage/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Vintage/ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Vintage/height.png',
            twoK: '',
            threeK: '',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Grilled',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Grilled/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Grilled/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Grilled/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Grilled/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Grilled/ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Grilled/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/Glass_Grilled/opacity.jpg',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Frosted',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Frosted/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Frosted/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Frosted/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Frosted/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Frosted/ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Frosted/height.png',
            twoK: '',
            threeK: '',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Blocks 2',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Blocks_02/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Blocks_02/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Blocks_02/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Blocks_02/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Blocks_02/ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Blocks_02/height.png',
            twoK: '',
            threeK: '',
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
            x: 10,
            y: 10
        }
    },
    {
        name: 'Glass Window 02',
        category: 'GlassPattern',
        parnetContainer: 'GlassPattern',
        img_ref: '',
        base: {
            oneK: 'materials/Glass_Window_02/base.jpg',
            twoK: '',
            threeK: '',
        },
        normal: {
            oneK: 'materials/Glass_Window_02/normal.jpg',
            twoK: '',
            threeK: '',
        },
        rough: {
            oneK: 'materials/Glass_Window_02/rough.jpg',
            twoK: '',
            threeK: '',
        },
        metal: {
            oneK: 'materials/Glass_Window_02/metal.jpg',
            twoK: '',
            threeK: '',
        },
        Ao: {
            oneK: 'materials/Glass_Window_02/ao.jpg',
            twoK: '',
            threeK: '',
        },
        height: {
            oneK: 'materials/Glass_Window_02/height.png',
            twoK: '',
            threeK: '',
        },
        specular: {
            oneK: '',
            twoK: '',
            threeK: '',
        },
        opacity: {
            oneK: 'materials/Glass_Window_02/opacity.jpg',
            twoK: '',
            threeK: '',
        },
        tiling: {
            x: 10,
            y: 10
        }
    },






]