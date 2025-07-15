// src/pages/ShopByCategory.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShopByCategory.css"; // Create this for custom styling

const categoryProducts = [
  {
    id: 201,
    name: "SUMMER UNSTITCHED",
    price: "PKR 3,999",
    image: "https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Unstitched_f82ae693-5efc-4cef-918a-3e09a6b02d30.jpg?v=1749543120",
    description: "Elegant summer unstitched lawn fabric with embroidery."
  },
  {
    id: 202,
    name: "WINTER SHAWL SET",
    price: "PKR 4,899",
    image: "https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Menswear_e8689d25-212a-4ab4-8eaa-460a689a02b0.jpg?v=1751866119",
    description: "Warm and luxurious winter shawl set with matching dupatta."
  },
  {
    id: 203,
    name: "READY TO WEAR - PINK",
    price: "PKR 5,499",
    image: "https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Unstitched-fabric_e1e5b16d-11f0-4d71-9e57-a0f56074c1fc.jpg?v=1749543120",
    description: "Premium stitched pink suit for daily and festive wear."
  },
  {
    id: 204,
    name: "FESTIVE BLACK EDITION",
    price: "PKR 6,999",
    image: "https://cdn.shopify.com/s/files/1/0551/9763/0638/files/Ready-to-wear_43b305a8-8852-4bda-91fb-94b15e4fe68f.jpg?v=1749543120",
    description: "Festive black edition 3-piece lawn with embroidery."
  },
];

export default function ShopByCategory() {
  const navigate = useNavigate();

  return (
    <div className="category-detail-container">
      <h2 className="category-title">Shop By Category - Featured Collection</h2>
      <div className="category-grid">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="category-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <p className="desc">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
