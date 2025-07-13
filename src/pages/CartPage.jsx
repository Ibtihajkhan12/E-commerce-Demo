import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import Header from "../component/Header";
import './CartPage.css';
import { FaTrashAlt } from "react-icons/fa";
import { products } from "../pages/Home";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

export default function CartPage() {
  const { cartItems, removeFromCart, clearNewItemFlag, updateQuantity } = useCart();

  useEffect(() => {
    clearNewItemFlag();
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
    return acc + price * (item.quantity || 1);
  }, 0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
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
        </div>
      </div>

      <div className="suggested-products">
        <h2 style={{ color: "white", marginLeft: "500px" }}>Best Sellers</h2>
        <Slider {...sliderSettings}>
          {products.slice(0, 10).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none" }}>
              <div className="slider-card">
                <img src={product.image} alt={product.name} className="slider-img" />
                <div className="slider-info">
                  <h4>{product.name}</h4>
                  <p>{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <Footer />
    </>
  );
}
