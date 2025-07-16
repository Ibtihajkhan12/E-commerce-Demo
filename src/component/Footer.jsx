import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>We offer quality fashion products including fragrances, stitched, and unstitched wear.</p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#category">Shop by Category</a></li>
            <li><a href="#best-selling">Best Selling</a></li>
            <li><a href="#fragrance">Fragrances</a></li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h2>SIGNUP</h2>
          <p>Get updates on offers and new products.</p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">SIGNUP</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ibtihaj Store. All rights reserved.</p>
      </div>

      {/* WhatsApp Icon - Now inside footer */}
      <a
        href="https://wa.me/923412620726"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-footer-icon"  /* Changed class name */
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
          className="whatsapp-icon"
        />
      </a>
    </footer>
  );
}