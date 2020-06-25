import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="img 1"
    />
    <div className="carousel-item__details">
      <div>
        <img className="details-more" src="./img/more.png" alt="" />
      </div>
      <p className="carousel-item__details--title">Ana Sialani</p>
      <p className="carousel-item__details--subtitle">19 years A+</p>
    </div>
  </div>
);

export default CarouselItem;
