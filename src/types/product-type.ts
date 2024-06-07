export interface ProductType {
    slug: string;
    title: string;
    description: string[];
    price: number;
    color: {name: string, hex: string};
    links: {name: string; url: string}[];
    images: string[];
}