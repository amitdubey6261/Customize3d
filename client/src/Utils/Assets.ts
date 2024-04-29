import * as _ from 'three';

export type datatype = {
    name: string,
    path: string,
    group : 'sofa' | 'table' | null , 
}

export const data: datatype[] = [
    {
        name: 'Wall',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Wall.glb',
        group : null,
    },
    {
        name: 'window',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Window.glb',
        group : null,

    },
    {
        name: 'Wood_Table',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Wood_Table.glb',
        group : 'table',
    },
    {
        name: 'Floor',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Floor.glb',
        group : null,
    },
    {
        name: 'Sofa',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Sofa_Models/Wood_Sofa.glb',
        group : 'sofa',
    },
    {
        name: 'Frames',
        path: 'https://d2629xvaofl3d3.cloudfront.net/models/Frames.glb',
        group : null,
    },
    {
        name: 'Floor_Lamp',
        path: 'https://d2629xvaofl3d3.cloudfront.net/Floor_Lamp.glb',
        group : null,
    }
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
        twok: string,
        fourk: string,
    },
    normal: {
        onek: string,
        twok: string,
        fourk: string,
    },
    metal: {
        onek: string,
        twok: string,
        fourk: string,
    },
    rough: {
        onek: string,
        twok: string,
        fourk: string,
    },
    Ao: {
        onek: string,
        twok: string,
        fourk: string,
    },
    opacity: {
        onek: string,
        twok: string,
        fourk: string,
    },
    specular: {
        onek: string,
        twok: string,
        fourk: string,
    },
    height: {
        onek: string,
        twok: string,
        fourk: string,
    },
    tiling: {
        x: number,
        y: number,
    }
}

export const Materials2: CustomMaterial2[] = [
    {
        name: 'Leather01',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/2k/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/4k/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_01/1k/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: '2',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_02/1k/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: '3',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_03/1k/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: '4',
        category: 'fabric',
        parnetContainer: 'Leather',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/LeatherMaterials/Leather_04/1k/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'Fabric01',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric01/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'Fabric02',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric02/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'Fabric03',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric03/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
    {
        name: 'Fabric04',
        category: 'fabric',
        parnetContainer: 'Fabric',
        img_ref: '',
        base: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/base.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/base.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/base.png',
        },
        normal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/normal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/normal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/normal.png',
        },
        rough: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/rough.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/rough.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/rough.png',
        },
        metal: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/metal.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/metal.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/metal.png',
        },
        Ao: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/ao.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/ao.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/ao.png',
        },
        height: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/height.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/height.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/height.png',
        },
        specular: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/specular.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/specular.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/specular.png',
        },
        opacity: {
            onek: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/opacity.png',
            twok: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/opacity.png',
            fourk: 'https://d2629xvaofl3d3.cloudfront.net/materials/Fabric04/opacity.png',
        },
        tiling: {
            x: 5,
            y: 5
        }
    },
]