import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  //para probar que un objeto tiene n elementos
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    //mandamosun objeto vacio para reiniciar nuestro estado
    props.logoutRequest({});
  };
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link className="header__redirect" to="/">
        <div className="header__brand">
          <img className="header__img" src={logo} alt="logo Blove" />
          <h1 className="header__title--blove">Blove</h1>
          <h1 className="header__title--donation">Donation</h1>
        </div>
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={hasUser ? gravatar(user.email) : userIcon} alt="User" />
          <p className="profile-text">Profile</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Log out
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Log in</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.prototype = {
  user: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
