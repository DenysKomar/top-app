export interface ProductsCharacteristics {
    value: string;
    name: string;
}
export interface ReviewModal {
    _id: string;
    name: string;
    title:string;
    description: string;
    rating: number;
    createdAt:Date;
}

export interface ProductsModel {
    _id: string;
    categories:string[];
    tags: string[];
    title: string;
    link:string;
    price:number;
    credit:number;
    oldPrice:number;
    description:string;
    characteristics:ProductsCharacteristics[];
    createdAt:Date;
    updatedAt:Date;
    __v:number;
    image:string;
    initialRating:number;
    reviews:ReviewModal[];
    reviewsCount:number;
    reviewAvg?:number;
    advantage:string;
}