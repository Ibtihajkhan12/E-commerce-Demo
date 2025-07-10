import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetail from "./component/ProductDetail";
// import CartPage from "./pages/CartPage";

import CartPage from './pages/CartPage'; // ⬅️ new page
import { CartProvider } from './context/CartContext'; // ⬅️ import this

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  </CartProvider>
);
