import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import logo from "../Images/logo.png";
import "./Header.css";

export default function Header({ setView, scrollToCategory, scrollToBestSelling, scrollToFragrance }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo" onClick={() => setView?.("home")}>
        <img src={logo} alt="Shop with Ibtihaj" style={{ height: "70px", cursor: "pointer" }} />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <button onClick={scrollToCategory}>SHOP BY CATEGORY</button>
        <button onClick={scrollToBestSelling}>BEST SELLING</button>
        <button onClick={scrollToFragrance}>FRAGRANCES</button>

        <div className="cart-icon" onClick={() => navigate("/cart")}>
          <FaShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="cart-count-badge">{cartItems.length}</span>
          )}
        </div>
      </nav>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>
    </header>
  );
}