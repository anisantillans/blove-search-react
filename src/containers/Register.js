import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section class="signup">
    <section class="signup__container">
      <h2 tabindex="0">Sign up</h2>
      <form class="signup__container--form">
        <input
          aria-label="Names"
          class="input"
          type="text"
          placeholder="Names"
        />
        <input
          aria-label="Email"
          class="input"
          type="email"
          placeholder="Email"
        />
        <input
          aria-label="Password"
          class="input"
          type="password"
          placeholder="Password"
        />
        <button class="button">Sign Up</button>
      </form>
      <Link to="/login">Log In</Link>
    </section>
  </section>
);

export default Register;
