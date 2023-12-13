import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import ProductDetail from '../views/ProductDetail/ProductDetail';
import Cart from '../views/Cart';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/home' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
