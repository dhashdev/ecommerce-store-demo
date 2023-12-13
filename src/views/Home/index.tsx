import React, { useState, useEffect } from 'react';
import Header from '../../component/Header';
import { useAutheticate } from '../../hooks/useAuthentication';
import { ProductArray, ProductTypes } from '../../types/ProductTypes';
import { CategoriesType } from '../../types/Categories';
import productsApi from '../../api/productsApi';
import ProductList from '../../component/ProductList';
import './HomeStyles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState<ProductArray>();
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<CategoriesType>();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [filteredProducts, setFilteredProducts] = useState<ProductArray>();

  useAutheticate();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  async function fetchProducts() {
    try {
      let productResponse = await productsApi.get('/products');
      let productData: ProductArray = await productResponse.data;
      setProducts(productData as ProductArray);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  }

  async function fetchCategories() {
    try {
      let productCategories = await productsApi.get('/products/categories');
      let categoriesData = await productCategories.data;
      setCategories(categoriesData);
    } catch (error) {
      console.log('error', error);
    }
  }

  async function setSelectedCategoryProduct(
    e: React.ChangeEvent<HTMLSelectElement>
  ) {
    const categoryValue = e.target.value as string;
    setSelectedCategory(categoryValue);
    setFilteredProducts(
      products?.filter((product) => product.category === categoryValue)
    );
  }

  return (
    <>
      <Header />
      <div>
        {categories && (
          <div>
            <label htmlFor='selectOptions'>Select an option:</label>
            <select
              id='selectOptions'
              value={selectedCategory}
              onChange={setSelectedCategoryProduct}
            >
              {categories.map((category: string, index: number) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <h2>Product page</h2>
      <div className='productList'>
        {loading ? (
          <div>Loading Products...</div>
        ) : (
          (filteredProducts || products)?.map((product: ProductTypes) => (
            <div key={product.id} className='productItem'>
              <Link to={`/product/${product.id}`} className='link-style'>
                <ProductList product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
