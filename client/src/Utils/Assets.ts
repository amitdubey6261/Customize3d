import * as _ from 'three';

export type datatype = {
    name: string,
    path: string,
    group: 'sofa' | 'table' | null,
}

export const data: datatype[] = [
    {
        name: 'Room',
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/zip/Room3.glb',
        group: null,
    },
    {
        name: 'Room',
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/zip/Accessories3.glb',
        group: null,
    },
    {
        name: 'Room',
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/zip/Compressed_Garden.glb',
        group: null,
    },
    {
        name: 'Lamp',
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/zip/Floor_Lamp.glb',
        group: null,
    },
    {
        name: 'Sofa',
        path: 'https://d2629xvaofl3d3.cloudfront.net/c3d_v2/gltf/Compressed_Sofa_Set2.glb',
        group: 'sofa',
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

export type CustomMaterial2 = {
    name: string,
    img_ref: string,
    category: string,
    parnetContainer: string,
    base: {
        onek: string,
    },
    normal: {
        onek: string,
    },
    metal: {
        onek: string,
    },
    rough: {
        onek: string,
    },
    Ao: {
        onek: string,
    },
    height: {
        onek: string,
    },
    tiling: {
        x: number,
        y: number,
    }
}

export const MaterialDir = [
    {
        name: "Alligator Leather",
        category: "fabric",
        parnetContainer: "leathers",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/01.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/AlligatorLeather/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 5, y: 5 }
    },
    {
        name: "Rough Leather",
        category: "fabric",
        parnetContainer: "leathers",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/02.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/RoughLeather/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 5, y: 5 }
    },
    {
        name: "Sheep Leather",
        category: "fabric",
        parnetContainer: "leathers",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/03.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/SheepLeather/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Taurillion Leather",
        category: "fabric",
        parnetContainer: "leathers",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/04.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/TaurillionLeather/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Denim Fabric",
        category: "fabric",
        parnetContainer: "fabrics",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/05.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/DenimFabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Gabardine Fabric",
        category: "fabric",
        parnetContainer: "fabrics",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/06.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Gabardinefabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Ripstop Fabric",
        category: "fabric",
        parnetContainer: "fabrics",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/07.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/RipstopFabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Synthetic Wool",
        category: "fabric",
        parnetContainer: "fabrics",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/08.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/SynteticWool/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Bamboo Wood",
        category: "wood",
        parnetContainer: "wood",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/09.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/BambooWood/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Beech Wood",
        category: "wood",
        parnetContainer: "wood",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/10.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/BeechWood/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Teak Wood",
        category: "wood",
        parnetContainer: "wood",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/11.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/TeakWood/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Wenge Wood",
        category: "wood",
        parnetContainer: "wood",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/12.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/WengeWood/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Brushed Metal",
        category: "metals",
        parnetContainer: "metals",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/20.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/cross_brushed_metal/Webp/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Iron Forged",
        category: "metals",
        parnetContainer: "metals",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/21.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/IronForged/Webp/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Stylized Copper",
        category: "metals",
        parnetContainer: "metals",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/22.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/stylized_copper/Webp/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Gold",
        category: "metals",
        parnetContainer: "metals",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/materials/webp_thumbs/23.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/Gold/Webp/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Denim Fabric",
        category: "pfab",
        parnetContainer: "pillow",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/05.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/DenimFabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Gabardine Fabric",
        category: "pfab",
        parnetContainer: "pillow",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/06.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Gabardinefabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Ripstop Fabric",
        category: "pfab",
        parnetContainer: "pillow",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/07.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/RipstopFabric/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
    {
        name: "Synthetic Wool",
        category: "pfab",
        parnetContainer: "pillow",
        img_ref: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/Thumbnails/08.webp",
        base_path: "https://d2629xvaofl3d3.cloudfront.net/c3d_v2/imgs/v2/SynteticWool/",
        textures: [
            "base.webp",
            "normal.webp",
            "rough.webp",
            "height.webp",
        ],
        tile: { x: 10, y: 10 }
    },
]


export const BaseTex = new Array(MaterialDir.length).fill(null); 