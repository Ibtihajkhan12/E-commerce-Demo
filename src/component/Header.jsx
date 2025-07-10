import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./Header.css";

export default function Header({ setView }) {
  const navigate = useNavigate();
  const { newItemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo" onClick={() => setView?.("home")}>Ecommerce Demo</h1>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setView?.("home")}>Home</button>
        <button onClick={() => setView?.("products")}>Products</button>
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <FaShoppingCart size={22} />
          {newItemCount > 0 && (
            <span className="cart-count-badge">{newItemCount}</span>
          )}
        </div>
      </nav>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </header>
  );
}
