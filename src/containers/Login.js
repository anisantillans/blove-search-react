import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google.png';
import facebookIcon from '../assets/static/facebook.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    //pertenece a Router, para navegar por todos los componente
    //ya que está englobado con BrowserRouter
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2 tabIndex="0">Log in</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="email"
              aria-label="Email"
              className="input"
              type="text"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              name="password"
              aria-label="Password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
            <button
              className="button"
              type="submit"
              //onClick="window.location='index.html'"
            >
              Log In
            </button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" name="" id="cbox1" value="checkboxs" />
                Remember me
              </label>
              <a href="/">{'  '}Forgotten my password</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img className="icon-google" src={googleIcon} alt="Google" />
              <a href="/">Login with Google</a>
            </div>
            <div>
              <img
                className="icon-facebook"
                src={facebookIcon}
                alt="Facebook"
              />
              <a href="/">Login with Facebook</a>
            </div>
          </section>
          <p className="login__container--register">
            You don't have an account?
            <Link to="/register"> Sign up</Link>
          </p>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
