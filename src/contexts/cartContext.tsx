import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { CartContextType } from '../types/cartContext';
import { ProductTypes } from '../types/ProductTypes';
// creating the context

const cartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [addedProduct, setAddedProduct] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('addedProduct');

    // Parse the stored JSON string, or default to an empty array if null
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];

    setAddedProduct(parsedProducts);
  }, []);

  const addProductsToCart = (product: ProductTypes) => {
    setAddedProduct((previousProduct) => [...previousProduct, product]);
    localStorage.setItem(
      'addedProduct',
      JSON.stringify([...addedProduct, product])
    );
  };

  const removeProductFromCart = (product: ProductTypes) => {
    const parsedProducts = JSON.parse(
      localStorage.getItem('addedProduct') as string
    );
    const removeTheProduct = parsedProducts.filter(
      (rProduct: ProductTypes) => rProduct.id !== product.id
    );
    setAddedProduct(removeTheProduct);
    localStorage.setItem('addedProduct', JSON.stringify([removeTheProduct]));
  };

  const contextValue: CartContextType = {
    addedProduct,
    addProductsToCart,
    removeProductFromCart,
  };

  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};
//creating custome hook to use the context
export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
