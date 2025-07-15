// // import React from "react";
// // import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
// // import "./Footer.css";

// // export default function Footer() {
// //   const whatsappNumber = "+923001234567"; 

// //   return (
// //     <footer className="ecom-footer">
// //       <div className="footer-top">
// //         <div className="footer-section">
// //           <h3>E-commerce</h3>
// //           <p>Bringing you the latest fashion and 
// //             lifestyle products at unbeatable prices.</p>
// //         </div>

// //         <div className="footer-section">
// //           <h4>Quick Links</h4>
// //           <ul>
// //             <li><a href="/">Home</a></li>
// //             <li><a href="/cart">Cart</a></li>

// //           </ul>
// //         </div>

// //         <div className="footer-section">
// //           <h4>Contact</h4>
// //           <p>Email: ibtihaajkhaan@gmail.com</p>
// //           <p>Phone: +92 123456789</p>

// //           <a
// //             href={`https://wa.me/${whatsappNumber}`}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="whatsapp-btn"
// //           >
// //           </a>
// //         </div>
// //       </div>

// //       <div className="footer-bottom">
// //         <p>© {new Date().getFullYear()} YourStore. All Rights Reserved.</p>
// //         <div className="social-icons">
// //           <a href="#"><FaFacebookF /></a>
// //           <a href="#"><FaInstagram /></a>
// //           <a href="#"><FaTwitter /></a>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }















// import React from 'react';
// import './Footer.css';

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h2>About Us</h2>
//           <p>We offer quality fashion products including fragrances, stitched, and unstitched wear.</p>
//         </div>

//         <div className="footer-section links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li><a href="#category">Shop by Category</a></li>
//             <li><a href="#best-selling">Best Selling</a></li>
//             <li><a href="#fragrance">Fragrances</a></li>
//           </ul>
//         </div>

//         <div className="footer-section subscribe">
//           <h2>SIGNUP</h2>
//           <p>Get updates on offers and new products.</p>
//           <form>
//             <input type="email" placeholder="Enter Your Email Address" />
//             <button type="submit">SIGNUP</button>
//           </form>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Ibtihaj Store. All rights reserved.</p>
//       </div>

//       {/* Floating WhatsApp Icon */}
//       <a
//         href="https://wa.me/923218941327" // <-- Replace this with your own number
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-float"
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
//           alt="WhatsApp"
//           className="whatsapp-icon"
//         />
//       </a>
//     </footer>
//   );
// }














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