import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import Header from "../component/Header";
import './CartPage.css';

export default function CartPage() {
  const { cartItems, clearNewItemFlag } = useCart();

  useEffect(() => {
    clearNewItemFlag(); // ✅ Remove badge on visit
  }, []);

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="cart-empty">Your cart is empty.</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
