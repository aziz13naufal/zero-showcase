export interface ProductType {
    slug: string;
    title: string;
    description: string[];
    price: number | string;
    color: {name: string, hex: string};
    links: {name: string; url: string}[];
    images: string[];
}