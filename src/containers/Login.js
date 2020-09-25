import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google.png';
import facebookIcon from '../assets/static/facebook.png';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2 tabIndex="0">Log in</h2>
      <form className="login__container--form">
        <input
          aria-label="Email"
          className="input"
          type="text"
          placeholder="Email"
        />
        <input
          aria-label="Password"
          className="input"
          type="password"
          placeholder="Password"
        />
        <button
          className="button"
          type="button"
          onClick="window.location='index.html'"
        >
          Log In
        </button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" name="" id="cbox1" value="checkboxs" />
            Remember me
          </label>
          <a href="/">Forgotten my password</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img className="icon-google" src={googleIcon} alt="Google" />
          <a href="/">Login with Google</a>
        </div>
        <div>
          <img className="icon-facebook" src={facebookIcon} alt="Facebook" />
          <a href="/">Login with Facebook</a>
        </div>
      </section>
      <p className="login__container--register">
        You don't have an account?
        <Link to="/register"> Sign up</Link>
      </p>
    </section>
  </section>
);
export default Login;
