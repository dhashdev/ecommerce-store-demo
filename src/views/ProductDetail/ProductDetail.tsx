import React, { useEffect, useState } from 'react';
import productsApi from '../../api/productsApi';
import { ProductTypes } from '../../types/ProductTypes';
import { useParams } from 'react-router-dom';
import { useAutheticate } from '../../hooks/useAuthentication';
import Header from '../../component/Header';
import { useCartContext } from '../../contexts/cartContext';
const ProductDetail = () => {
  const { id } = useParams();
  const { addProductsToCart } = useCartContext();
  const [product, setProduct] = useState<ProductTypes>();
  const [loading, setLoading] = useState<boolean>(true);

  useAutheticate();
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      let productResponse = await productsApi.get(`/products/${id}`);
      let data: ProductTypes = await productResponse.data;
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  }

  function addProductToCartHandler() {
    product && addProductsToCart(product);
  }

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <div>Loading Product...</div>
        ) : product ? (
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
            <button type='submit' onClick={addProductToCartHandler}>
              Add Product to Cart
            </button>
          </div>
        ) : (
          <div>Error</div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
