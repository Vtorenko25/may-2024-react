import {IRewiewModel} from "./IRewiewModel";

export interface IProductMode {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number
    },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: IRewiewModel[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {
        createdAt:string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    },
    images: string[],
    thumbnail: string
}