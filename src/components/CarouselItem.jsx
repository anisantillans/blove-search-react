import React from 'react';
import PropTypes from 'prop-types';
import moreIcon from '../assets/static/more.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ name, typeBlood, age, profile }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={profile} alt="img profile" />
    <div className="carousel-item__details">
      <div>
        <img className="details-more" src={moreIcon} alt="" />
      </div>
      <p className="carousel-item__details--title">{name}</p>
      <p className="carousel-item__details--subtitle">
        {`${age} years ${typeBlood}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  name: PropTypes.string,
  typeBlood: PropTypes.string,
  age: PropTypes.number,
  profile: PropTypes.string,
};

export default CarouselItem;
