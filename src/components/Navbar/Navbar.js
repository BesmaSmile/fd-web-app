import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <div className="row">
      <div><Link to="/login">Se connecter</Link></div>
      <div><Link to="/register">S&rsquo;inscrire</Link></div>
    </div>
  </div>
);

export default Navbar;
