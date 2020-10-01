import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moreIcon from '../assets/static/more.png';
import removeIcon from '../assets/static/remove-icon.png';
import playIcon from '../assets/static/play-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, name, typeBlood, age, profile, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, name, typeBlood, age, profile });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={profile} alt="img profile" />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt=""
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={moreIcon}
              alt=""
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{name}</p>
        <p className="carousel-item__details--subtitle">
          {`${age} years ${typeBlood}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  name: PropTypes.string,
  typeBlood: PropTypes.string,
  age: PropTypes.number,
  profile: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
