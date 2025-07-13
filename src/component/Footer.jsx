import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const whatsappNumber = "+923001234567"; 

  return (
    <footer className="ecom-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>E-commerce</h3>
          <p>Bringing you the latest fashion and 
            lifestyle products at unbeatable prices.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>

          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: ibtihaajkhaan@gmail.com</p>
          <p>Phone: +92 123456789</p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourStore. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
}
