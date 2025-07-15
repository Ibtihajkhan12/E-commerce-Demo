import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header'; 
import Footer from "../component/Footer";
import BannerSlider from '../component/BannerSlider';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FragranceSection from '../component/FragranceSection';
import BestSellingSection from '../context/BestSellingSection';

export const products = [];

export default function Home() {
  const navigate = useNavigate();

  // Refs
  const categoryRef = useRef(null);
  const bestSellingRef = useRef(null);
  const fragranceRef = useRef(null);

  // Scroll handler
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header
        scrollToCategory={() => scrollToSection(categoryRef)}
        scrollToBestSelling={() => scrollToSection(bestSellingRef)}
        scrollToFragrance={() => scrollToSection(fragranceRef)}
      />

      <main className="home-main">
        <BannerSlider />

        <div ref={categoryRef}>
          {/* <h1 className='featured-products-title'>SHOP BY CATEGORY</h1> */}
          <div className="category-card-grid">
            {products.map(product => (
              <div
                key={product.id}
                className="category-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} className="category-card-image" />
                <div className="category-card-overlay">
                  <h2>{product.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={bestSellingRef}>
          <BestSellingSection />
        </div>
{/* ✅ TOP BANNER IMAGE */}
            <div className="top-banner">
         <img
          src="https://mtjonline.com/cdn/shop/files/Web-Banner-Mahoor_1920x.jpg?v=1735991096"
         alt="Top Banner"
          className="top-banner-image"
          />
       </div>
        <div ref={fragranceRef}>
          <FragranceSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}