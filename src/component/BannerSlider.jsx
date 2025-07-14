import React from "react";
import Slider from "react-slick";
import "./BannerSlider.css";
import banner1 from "../Images/banner1.jpg";
import banner2 from "../Images/banner2.jpg";
import banner3 from "../Images/banner3.jpg"; 
import banner4 from "../Images/banner4.jpg";
import banner5 from "../Images/banner5.jpg";


const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const banners = [banner1, banner2, banner3,banner4, banner5];

  return (
    <div className="banner-slider-container">
      <Slider {...settings}>
        {banners.map((img, index) => (
          <div key={index} className="banner-slide">
            <img src={img} alt={`Banner ${index + 1}`} />
            <div className="banner-overlay">
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
