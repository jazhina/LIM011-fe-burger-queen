import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './cheeseburger.svg';
import './title.css';

const Title = () => (
  <div data-testid="logo">
    <header className="Header border border-dark d-flex p-2 bd-highlight">
      <h1 className=" d-inline-flex p-2 bd-highlight">BURGER QUEEN</h1>
      <img src={Logo} className="App-logo" alt="logo" />
      <Link to="/KitchenView"> Orden Cocina</Link>
    </header>
  </div>
);

export default Title;
