import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/cartContext';
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
