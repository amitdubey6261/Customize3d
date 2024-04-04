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
        x: number,
        y: number,
    }
}

export const Materials2: CustomMaterial2[] = [
    {
        name: 'Blue Fabric',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
        img_ref: '',
        base: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/base.jpg',
            twoK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/2K/base.jpg',
            threeK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/4K/base.jpg',
        },
        normal: {
            oneK: 'https://d2629xvaofl3d3.cloudfront.net/materials/materials/zip/RedChecked/1K/normal.jpg',
            twoK: 'materials/zip/RedChecked/2K/normal.jpg',
            threeK: 'materials/zip/RedChecked/4K/normal.jpg',
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        name: 'Bull Leather',
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
        name: 'Calfskin Leather',
        category: 'leather&fabric',
        targetGLBModel: {
            name: 'Sofa',
            targetOnly: [],
        },
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
        name: 'Cotton Rich Tricotine Weave',
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
        name: 'Jersey Stitch Fabric',
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
        name: 'Natural Cross Laminated Wood',
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
        name: 'Abandoned Factory Tiled Floor',
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
        name: 'Natural Cross Laminated Wood',
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
        name: 'Steel',
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
        name: 'Copper',
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