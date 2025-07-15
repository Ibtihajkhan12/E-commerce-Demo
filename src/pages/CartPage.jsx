// // import React, { useEffect } from "react";
// // import { useCart } from "../context/CartContext";
// // import Header from "../component/Header";
// // import './CartPage.css';
// // import { FaTrashAlt } from "react-icons/fa";
// // import { products } from "../pages/Home";
// // import Slider from "react-slick";
// // import { Link } from "react-router-dom";
// // import Footer from "../component/Footer";

// // export default function CartPage() {
// //   const { cartItems, removeFromCart, clearNewItemFlag, updateQuantity } = useCart();

// //   useEffect(() => {
// //     clearNewItemFlag();
// //   }, []);

// //   const totalPrice = cartItems.reduce((acc, item) => {
// //     const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
// //     return acc + price * (item.quantity || 1);
// //   }, 0);

// //   const sliderSettings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 400,
// //     slidesToShow: 4,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     responsive: [
// //       { breakpoint: 1024, settings: { slidesToShow: 3 } },
// //       { breakpoint: 768, settings: { slidesToShow: 2 } },
// //       { breakpoint: 480, settings: { slidesToShow: 1 } },
// //     ],
// //   };

// //   if (cartItems.length === 0) {
// //     return (
// //       <>
// //         <Header />
// //         <div className="cart-empty">Your cart is empty.</div>
// //       </>
// //     );
// //   }

// //   return (
// //     <>
// //       <Header />
// //       <div className="cart-page">
// //         <div className="cart-left">
// //           <h2>My Cart</h2>
// //           <div className="cart-header">
// //             <span>PRODUCTS</span>
// //             <span>PRICE</span>
// //             <span>QUANTITY</span>
// //             <span>TOTAL</span>
// //           </div>

// //           {cartItems.map((item, index) => {
// //             const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
// //             const quantity = item.quantity || 1;
// //             return (
// //               <div className="cart-row" key={index}>
// //                 <div className="cart-product">
// //                   <img src={item.image} alt={item.name} />
// //                   <div>
// //                     <h4>{item.name}</h4>
// //                     <p className="variant">{item.variant || 'Default'}</p>
// //                   </div>
// //                 </div>

// //                 <div className="cart-price">PKR {price.toLocaleString()}</div>

// //                 <div className="cart-qty">
// //                   <input
// //                     type="number"
// //                     min="1"
// //                     value={quantity}
// //                     onChange={(e) =>
// //                       updateQuantity(index, Math.max(1, parseInt(e.target.value) || 1))
// //                     }
// //                   />
// //                 </div>

// //                 <div className="cart-total">
// //                   PKR {(price * quantity).toLocaleString()}
// //                   <FaTrashAlt
// //                     className="cart-delete"
// //                     onClick={() => removeFromCart(index)}
// //                   />
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         <div className="cart-right">
// //           <h3>ORDER SUMMARY</h3>
// //           <div className="summary-line">
// //             <span>Sub Total:</span>
// //             <span>PKR {totalPrice.toLocaleString()}</span>
// //           </div>
// //           <div className="summary-line total">
// //             <strong>Total:</strong>
// //             <strong>PKR {totalPrice.toLocaleString()}</strong>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }





















// import React, { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import Header from "../component/Header";
// import './CartPage.css';
// import { FaTrashAlt } from "react-icons/fa";
// import Footer from "../component/Footer";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearNewItemFlag, updateQuantity } = useCart();
//   const [showModal, setShowModal] = useState(false);
//   const [checkoutData, setCheckoutData] = useState({
//     name: "",
//     email: "",
//     coupon: "",
//     shipping: "",
//     tax: "",
//   });

//   useEffect(() => {
//     clearNewItemFlag();
//   }, []);

//   const totalPrice = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
//     return acc + price * (item.quantity || 1);
//   }, 0);

//   const handleBuyNow = () => {
//     alert(`Notification sent to: ${checkoutData.email}`);
//     setShowModal(false);
//   };

//   if (cartItems.length === 0) {
//     return (
//       <>
//         <Header />
//         <div className="cart-empty">Your cart is empty.</div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <div className="cart-page">
//         <div className="cart-left">
//           <h2>My Cart</h2>
//           <div className="cart-header">
//             <span>PRODUCTS</span>
//             <span>PRICE</span>
//             <span>QUANTITY</span>
//             <span>TOTAL</span>
//           </div>

//           {cartItems.map((item, index) => {
//             const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
//             const quantity = item.quantity || 1;
//             return (
//               <div className="cart-row" key={index}>
//                 <div className="cart-product">
//                   <img src={item.image} alt={item.name} />
//                   <div>
//                     <h4>{item.name}</h4>
//                     <p className="variant">{item.variant || 'Default'}</p>
//                   </div>
//                 </div>

//                 <div className="cart-price">PKR {price.toLocaleString()}</div>

//                 <div className="cart-qty">
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) =>
//                       updateQuantity(index, Math.max(1, parseInt(e.target.value) || 1))
//                     }
//                   />
//                 </div>

//                 <div className="cart-total">
//                   PKR {(price * quantity).toLocaleString()}
//                   <FaTrashAlt
//                     className="cart-delete"
//                     onClick={() => removeFromCart(index)}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="cart-right">
//           <h3>ORDER SUMMARY</h3>
//           <div className="summary-line">
//             <span>Sub Total:</span>
//             <span>PKR {totalPrice.toLocaleString()}</span>
//           </div>
//           <div className="summary-line total">
//             <strong>Total:</strong>
//             <strong>PKR {totalPrice.toLocaleString()}</strong>
//           </div>
//           <button className="checkout-btn" onClick={() => setShowModal(true)}>
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="checkout-modal">
//             <h2>Checkout Details</h2>
//             <input
//               type="text"
//               placeholder="Name"
//               value={checkoutData.name}
//               onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={checkoutData.email}
//               onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Coupon Code"
//               value={checkoutData.coupon}
//               onChange={(e) => setCheckoutData({ ...checkoutData, coupon: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Shipping (e.g. PKR 300)"
//               value={checkoutData.shipping}
//               onChange={(e) => setCheckoutData({ ...checkoutData, shipping: e.target.value })}
//             />
//             <input
//               type="text"
//               placeholder="Tax (e.g. PKR 150)"
//               value={checkoutData.tax}
//               onChange={(e) => setCheckoutData({ ...checkoutData, tax: e.target.value })}
//             />
//             <button onClick={handleBuyNow}>Buy It Now</button>
//             <button onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// }
























import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Header from "../component/Header";
import './CartPage.css';
import { FaTrashAlt } from "react-icons/fa";
import Footer from "../component/Footer";
import confetti from "canvas-confetti";

export default function CartPage() {
  const { cartItems, removeFromCart, clearNewItemFlag, updateQuantity } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    coupon: "",
    shipping: "",
    tax: "",
  });

  useEffect(() => {
    clearNewItemFlag();
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + price * (item.quantity || 1);
  }, 0);

  const handleBuyNow = () => {
    if (!checkoutData.email || !checkoutData.name) {
      alert("Please fill in name and email.");
      return;
    }

    // 🎉 Confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Notification simulation
    alert(`Order sent to: ${checkoutData.email}`);

    // Reset fields and close modal
    setCheckoutData({
      name: "",
      email: "",
      phone: "",
      address: "",
      coupon: "",
      shipping: "",
      tax: "",
    });
    setShowModal(false);
  };

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
      <div className="cart-page">
        <div className="cart-left">
          <h2>My Cart</h2>
          <div className="cart-header">
            <span>PRODUCTS</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>TOTAL</span>
          </div>

          {cartItems.map((item, index) => {
            const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
            const quantity = item.quantity || 1;
            return (
              <div className="cart-row" key={index}>
                <div className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p className="variant">{item.variant || 'Default'}</p>
                  </div>
                </div>

                <div className="cart-price">PKR {price.toLocaleString()}</div>

                <div className="cart-qty">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(index, Math.max(1, parseInt(e.target.value) || 1))
                    }
                  />
                </div>

                <div className="cart-total">
                  PKR {(price * quantity).toLocaleString()}
                  <FaTrashAlt
                    className="cart-delete"
                    onClick={() => removeFromCart(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="cart-right">
          <h3>ORDER SUMMARY</h3>
          <div className="summary-line">
            <span>Sub Total:</span>
            <span>PKR {totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-line total">
            <strong>Total:</strong>
            <strong>PKR {totalPrice.toLocaleString()}</strong>
          </div>
          <button className="checkout-btn" onClick={() => setShowModal(true)}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="checkout-modal">
            <h2>Checkout Details</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={checkoutData.name}
              onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={checkoutData.email}
              onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={checkoutData.phone}
              onChange={(e) => setCheckoutData({ ...checkoutData, phone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address"
              value={checkoutData.address}
              onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
            />
            <input
              type="text"
              placeholder="Shipping (e.g. PKR 300)"
              value={checkoutData.shipping}
              onChange={(e) => setCheckoutData({ ...checkoutData, shipping: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tax (e.g. PKR 150)"
              value={checkoutData.tax}
              onChange={(e) => setCheckoutData({ ...checkoutData, tax: e.target.value })}
            />
            <button onClick={handleBuyNow}>Buy It Now</button>
            <button onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
