import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    //para que no funcione como normalmente html envia los datos
    event.preventDefault();
    props.registerRequest(form);
    //history: hacia donde vamos a mover al usuario
    //cuando termine el registro
    props.history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className="signup">
        <section className="signup__container">
          <h2>Sign up</h2>
          <form className="signup__container--form " onSubmit={handleSubmit}>
            <input
              name="name"
              aria-label="Names"
              className="input"
              type="text"
              placeholder="Names"
              onChange={handleInput}
            />
            <input
              name="email"
              aria-label="Email"
              className="input"
              type="email"
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
            <button className="button">Sign Up</button>
          </form>
          <Link to="/login">Log In</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);
