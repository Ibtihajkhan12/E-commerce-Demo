// src/components/FragranceSection.jsx
import React from 'react';
import './FragranceSection.css';
import { fragranceProducts } from '../data/fragranceProducts';
import { useNavigate } from 'react-router-dom';

export default function FragranceSection() {
  const navigate = useNavigate();

  return (
    <div className="fragrance-section">
      <h2 className="section-title">FRAGRANCES</h2>
      <div className="fragrance-grid">
        {fragranceProducts.map(product => (
          <div
            key={product.id}
            className="fragrance-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
