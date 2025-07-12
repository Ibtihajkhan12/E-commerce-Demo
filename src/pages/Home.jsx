import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Header from '../component/Header'; 
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../component/Footer"; // 👈 Add this at top



export const products = [
  {
    id: 1,
    name: "Classic Hoodie",
    description: "High-quality, stylish and comfortable.",
    price: "$24.99",
    brand: "Urban Wear",
    category: "Clothing",
    image: "https://cdn.shopify.com/s/files/1/0973/7782/files/M-0125-KT-5632_BLACK21031.jpg?v=1745957183",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 20cm, H: 30cm, D: 5cm",
    warranty: "7 Days"
  },
  {
    id: 2,
    name: "Denim Jacket",
    description: "Trendy denim jacket for casual wear.",
    price: "$34.99",
    brand: "DenimPro",
    category: "Outerwear",
    image: "https://thumbs.dreamstime.com/b/jean-denim-female-jacket-isolated-long-sleeve-dark-blue-casual-fashion-women-clothing-91741998.jpg",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 25cm, H: 40cm, D: 6cm",
    warranty: "15 Days"
  },
  {
    id: 3,
    name: "Graphic T-Shirt",
    description: "Bold graphic tee with attitude.",
    price: "$14.99",
    brand: "StreetLine",
    category: "T-Shirts",
    image: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg",
    stock: "Limited Stock",
    minQty: 1,
    dimensions: "W: 18cm, H: 25cm, D: 3cm",
    warranty: "5 Days"
  },
  {
    id: 4,
    name: "Summer Shorts",
    description: "Lightweight and breathable shorts.",
    price: "$19.99",
    brand: "BreezeFit",
    category: "Shorts",
    image: "https://img.freepik.com/free-photo/casual-men-short-pants_1203-8186.jpg?semt=ais_hybrid&w=740",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 22cm, H: 20cm, D: 3cm",
    warranty: "7 Days"
  },
  {
    id: 5,
    name: "Casual Sneakers",
    description: "Perfect sneakers for everyday wear.",
    price: "$44.99",
    brand: "StepUp",
    category: "Shoes",
    image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?semt=ais_hybrid&w=740",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 30cm, H: 15cm, D: 10cm",
    warranty: "30 Days"
  },
  {
    id: 6,
    name: "Formal Shirt",
    description: "Crisp formal shirt for office wear.",
    price: "$29.99",
    brand: "OfficeWear",
    category: "Shirts",
    image: "https://i.pinimg.com/474x/c3/93/e0/c393e0dc8adae746d01ac4bd6676c3a6.jpg",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 20cm, H: 30cm, D: 4cm",
    warranty: "10 Days"
  },
  {
    id: 7,
    name: "Cargo Pants",
    description: "Durable pants with extra pockets.",
    price: "$39.99",
    brand: "TrekStyle",
    category: "Bottoms",
    image: "https://media.wired.com/photos/611c5312798f0e2c853b702f/1:1/w_993,h_993,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg",
    stock: "Low Stock",
    minQty: 1,
    dimensions: "W: 25cm, H: 40cm, D: 5cm",
    warranty: "15 Days"
  },
  {
    id: 8,
    name: "Wool Sweater",
    description: "Warm and cozy for the cold season.",
    price: "$49.99",
    brand: "WarmNest",
    category: "Winterwear",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 28cm, H: 35cm, D: 6cm",
    warranty: "20 Days"
  },
  {
    id: 9,
    name: "Jogger Pants",
    description: "Comfy joggers for active lifestyle.",
    price: "$32.99",
    brand: "FitFlex",
    category: "Activewear",
    image: "https://media.istockphoto.com/id/1314274760/photo/sport-pants.jpg?s=612x612&w=0&k=20&c=2siBA_21V8CbWXUfQ7ttUqW7ZOzs_d2yjSK8jEtvLw4=",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 23cm, H: 38cm, D: 5cm",
    warranty: "10 Days"
  },
  {
    id: 10,
    name: "Flannel Shirt",
    description: "Classic check pattern, soft fabric.",
    price: "$27.99",
    brand: "PlaidPro",
    category: "Shirts",
    image: "https://media.istockphoto.com/id/475162140/photo/shirt-isolated.jpg?s=612x612&w=0&k=20&c=zY28y7z7dJU1u1kztfntVjxWbG2aa5CAvgZMqp41ADE=",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 21cm, H: 33cm, D: 4cm",
    warranty: "7 Days"
  },
  {
    id: 11,
    name: "Track Jacket",
    description: "Sporty jacket with sleek look.",
    price: "$42.99",
    brand: "MoveMax",
    category: "Jackets",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 26cm, H: 36cm, D: 6cm",
    warranty: "10 Days"
  },
  {
    id: 12,
    name: "Trench Coat",
    description: "Stylish coat for winter elegance.",
    price: "$89.99",
    brand: "Eleganza",
    category: "Coats",
    image: "https://media.istockphoto.com/id/1516524215/photo/beige-female-elegant-trench-coat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=MNOqU92QJFHOC1hiNFURrUA8rYiD4xN4HX0rOKjIDqE=",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 35cm, H: 50cm, D: 7cm",
    warranty: "30 Days"
  },
  {
    id: 13,
    name: "Graphic Hoodie",
    description: "Cool hoodie with urban print.",
    price: "$39.99",
    brand: "UrbanInk",
    category: "Hoodies",
    image: "https://media.boohooman.com/i/boohooman/bmm70002_black_xl?$product_image_main_mobile$&fmt=webp",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 22cm, H: 32cm, D: 5cm",
    warranty: "15 Days"
  },
  {
    id: 14,
    name: "V-Neck Tee",
    description: "Simple and elegant v-neck style.",
    price: "$16.99",
    brand: "BasicStyle",
    category: "T-Shirts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvcK1PBjTCsxhQpIwpi1SWT2FKmxpkDD2Tg&s",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 18cm, H: 25cm, D: 3cm",
    warranty: "5 Days"
  },
  {
    id: 15,
    name: "Bomber Jacket",
    description: "Classic bomber with modern flair.",
    price: "$54.99",
    brand: "AirStyle",
    category: "Jackets",
    image: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745028.jpg?semt=ais_hybrid&w=740",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 27cm, H: 37cm, D: 6cm",
    warranty: "20 Days"
  },
  {
    id: 16,
    name: "Canvas Sneakers",
    description: "Classic sneakers for everyday wear.",
    price: "$39.99",
    brand: "Kickstart",
    category: "Shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1nn2Lu0xTVERzw2uTUuggA7c-06AnI8hfQ&s",
    stock: "In Stock",
    minQty: 1,
    dimensions: "W: 30cm, H: 14cm, D: 10cm",
    warranty: "30 Days"
  },
  {
  id: 17,
  name: "Brown Leather Wallet",
  description: "Stylish brown leather wallet with compact design and RFID protection.",
  price: "$24.99",
  brand: "WalletCraft",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1624538000860-24716b9050f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FsbGV0fGVufDB8fDB8fHww",
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 11cm, H: 9cm, D: 2cm",
  warranty: "12 Months"
},
{
  id: 18,
  name: "Golden Aviator Sunglasses",
  description: "UV-protected reflective aviator sunglasses with golden frame and sleek design.",
  price: "$19.99",
  brand: "SunMax",
  category: "Accessories",
  image: "https://images.unsplash.com/photo-1502767089025-6572583495f9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bmdsYXNzZXN8ZW58MHx8MHx8fDA%3D",
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 14cm, H: 5cm, D: 3cm",
  warranty: "6 Months"
},
{
  id: 19,
  name: "Pink Floral Perfume",
  description: "Elegant floral fragrance in a pink glass bottle for a soft feminine touch.",
  price: "$59.99",
  brand: "TimeZone",
  category: "Watches", // Keeping original category if needed, otherwise change to "Perfume"
  image: "https://marketplace.canva.com/EAGSec-fmik/2/0/1600w/canva-pink-elegant-special-sale-perfume-instagram-post-Uvwn1uyqzaM.jpg",
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 4.5cm, H: 4.5cm, D: 1.2cm",
  warranty: "24 Months"
},
{
  id: 20,
  name: "Vintage Glass Perfume",
  description: "Vintage-style perfume bottle with gold atomizer and decorative charm.",
  price: "$49.99",
  brand: "GearPro",
  category: "Bags", // Keeping original if needed, or switch to "Perfume"
  image: "https://www.shutterstock.com/image-photo/perfume-bottle-vintage-fragrance-on-600nw-2186852355.jpg",
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 30cm, H: 45cm, D: 15cm",
  warranty: "12 Months"
},

{
  id: 21,
  name: "Foldable Headphones",
  description: "Compact and stylish foldable headphones with rich bass and clear sound.",
  price: "$34.99",
  brand: "SoundMax",
  category: "Electronics",
  image: "https://i5.walmartimages.com/seo/SoundPlay-Foldable-Wireless-Headphones-Bluetooth-Over-Ear-Headset-with-Built-in-Mic_7781a45d-3746-4e57-9448-ed352177f124.e514a94af242606cd9abd487ef2bf27f.png", 
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 18cm, H: 20cm, D: 6cm",
  warranty: "6 Months"
},
{
  id: 22,
  name: "Leather Office Bag",
  description: "Professional leather office bag with padded laptop compartment.",
  price: "$64.99",
  brand: "OfficeLine",
  category: "Bags",
  image: "https://5.imimg.com/data5/SELLER/Default/2023/11/364113044/AV/LE/DQ/121719487/butterflytan01-500x500.jpg", 
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 38cm, H: 28cm, D: 10cm",
  warranty: "12 Months"
},
{
  id: 23,
  name: "Black Running Shoes",
  description: "Lightweight and breathable running shoes for everyday training.",
  price: "$49.99",
  brand: "RunFlex",
  category: "Shoes",
  image: "https://www.shutterstock.com/image-photo/sport-shoes-isolated-on-white-600nw-2172869701.jpg", 
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 30cm, H: 14cm, D: 10cm",
  warranty: "9 Months"
},
{
  id: 24,
  name: "Stainless Steel Watch",
  description: "Luxury stainless steel wristwatch with classic analog design.",
  price: "$89.99",
  brand: "LuxTime",
  category: "Watches",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSePd6QCi-xqL4NtkK9aCpRdNhuwQbGqXnhA&s", 
  stock: "In Stock",
  minQty: 1,
  dimensions: "W: 4.2cm, H: 4.2cm, D: 1.1cm",
  warranty: "24 Months"
}



];

export default function Home() {
  const [view, setView] = useState('home');
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="app">
      <Header setView={setView} /> {/* ✅ Use the reusable header */}

      <main>
        {view === 'home' ? (
          <div className="slider-container">
            <Slider {...settings}>
            {products.map((product) => (
               <div
      key={product.id}
      className="slider-item"
      onClick={() => navigate(`/product/${product.id}`)} // 👈 navigation added
      style={{ cursor: "pointer" }}
    >
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  ))}
</Slider>

          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
    
  );
}
