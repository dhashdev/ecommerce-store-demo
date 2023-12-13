import React, { useState, useEffect } from 'react';
import { ProductTypes } from '../../types/ProductTypes';
import ProductList from '../../component/ProductList';
const Cart = () => {
  const [products, setAddProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const addedProduct = localStorage.getItem('addedProduct');

    const parsedAddedProduct = addedProduct ? JSON.parse(addedProduct) : [];

    setAddProducts(parsedAddedProduct);
  }, []);
  return (
    <>
      <div>
        {products ? (
          products.map((product) => {
            return (
              <>
                <ProductList product={product} />
              </>
            );
          })
        ) : (
          <div>No added product</div>
        )}
      </div>
    </>
  );
};

export default Cart;
