import React from 'react';
import Logo from './cheeseburger.svg';
import './title.css';

const Title = () => (
  <div data-testid="logo">
    <header className="Header border border-dark d-flex p-2 bd-highlight">
      <h1 className=" d-inline-flex p-2 bd-highlight">BURGER QUEEN</h1>
      <img src={Logo} className="App-logo" alt="logo" />
    </header>
  </div>
);

export default Title;
