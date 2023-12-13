export interface ProductTypes {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type ProductArray = ProductTypes[];
