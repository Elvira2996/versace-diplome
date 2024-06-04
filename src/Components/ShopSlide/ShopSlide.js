import React, { useState } from 'react';
import './ShopSlide.css'
import Shop1 from "../../images/shop1.jpg"
import Shop2 from "../../images/shop2.jpg"
import Shop3 from "../../images/shop3.jpg"
import Shop4 from "../../images/shop4.jpg"

const ShopSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: Shop1, name: "Barocco Sea Necklace", price: "$450" },
    { image: Shop2, name: "Barocco Sea Knit Polo Cardigan", price: "$1,490" },
    { image: Shop3, name: "Barocco Sea Knit Crop Top", price: "$790" },
    { image: Shop4, name: "Barocco Sea Knit Mini Skirt", price: "$750" }
  ];

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="shop-slide">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`shop-card ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt="#" />
          <div className="empty-space">
            <span className="slide_name">{slide.name}</span>
            <span className="slide_price">{slide.price}</span>
          </div>
        </div>
      ))}
      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </section>
  );
};

export default ShopSlide;