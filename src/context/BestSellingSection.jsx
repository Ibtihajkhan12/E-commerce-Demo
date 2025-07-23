import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BestSellingSection.css';
import { allProducts } from '../data/productData';

export default function BestSellingSection() {
  const navigate = useNavigate();

  return (
    <div className="best-selling-section">
      <h2 className="best-selling-title">BEST SELLING</h2>
      <div className="product-card-row">
        {allProducts.slice(0, 8).map(product => ( 
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}