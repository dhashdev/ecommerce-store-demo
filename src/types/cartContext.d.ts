import { ProductTypes } from './ProductTypes';
export interface CartContextType {
  addedProduct: ProductTypes[];
  addProductsToCart: (product: ProductTypes) => void;
  removeProductFromCart: (product: ProductTypes) => void;
}
