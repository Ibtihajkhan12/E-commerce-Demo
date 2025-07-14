import React from 'react';
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/productData';
import { fragranceProducts } from '../data/fragranceProducts';
import Header from './Header';
import Footer from '../component/Footer';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const numericId = parseInt(id);

  // Combine both product arrays
  const product =
    allProducts.find(p => p.id === numericId) ||
    fragranceProducts.find(p => p.id === numericId);

  const { addToCart } = useCart();

  if (!product) {
    return <h2 style={{ textAlign: 'center' }}>Product not found</h2>;
  }

  return (
    <>
      <Header />
      <div className="detail">
        <img src={product.image} alt={product.name} />
        <div className="info">
          <h1>{product.name}</h1>
          <p><strong>Price:</strong> {product.price}</p>
          {product.brand && <p><strong>Brand:</strong> {product.brand}</p>}
          {product.category && <p><strong>Category:</strong> {product.category}</p>}
          {product.stock && <p><strong>Stock:</strong> {product.stock}</p>}
          {product.dimensions && <p><strong>Sizes:</strong> {product.dimensions}</p>}
          {product.warranty && <p><strong>Warranty:</strong> {product.warranty}</p>}
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
