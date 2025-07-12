import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { products } from '../pages/Home';
import Header from './Header';
import { useCart } from '../context/CartContext';
import Footer from "../component/Footer"; // 👈 Add this at top




export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <h2 style={{ textAlign: 'center' }}>Product not found</h2>;

  return (
    <>
      <Header />
      
      <div className="detail">
        <img src={product.image} alt={product.name} />
        <div className="info">
          <h1>{product.name}</h1>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p>{product.description}</p>
          <ul>
            <li><strong>Availability:</strong> {product.stock}</li>
            <li><strong>Minimum Order Quantity:</strong> {product.minQty}</li>
            <li><strong>Dimensions:</strong> {product.dimensions}</li>
            <li><strong>Warranty:</strong> {product.warranty}</li>
          </ul>
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
    
  );
  
}
