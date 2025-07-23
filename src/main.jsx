import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import ProductDetail from "./component/ProductDetail";
import CartPage from "./pages/CartPage";
import ShopByCategory from './pages/ShopByCategory';
import { CartProvider } from './context/CartContext';
import AdminDashboard from './pages/AdminDashboard';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shop-by-category" element={<ShopByCategory />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </CartProvider>
  </React.StrictMode>
);
