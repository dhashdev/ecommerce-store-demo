import React from 'react';
import { ProductTypes } from '../../types/ProductTypes';

interface ProductListProps {
  product: ProductTypes;
}
const ProductList = ({ product }: ProductListProps) => {
  return (
    <div key={product.id}>
      <div>
        {' '}
        <h3>{product.title}</h3>
      </div>
      <div>
        <img src={product.image} width={100} height={100} alt='' />
      </div>
      <div>{product.description}</div>
      <div>
        <div>
          {' '}
          <strong>Price: {product.price}</strong>
        </div>
        <div>
          <strong>Category: {product.category}</strong>{' '}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
