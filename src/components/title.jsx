import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Logo from './cheeseburger.svg';
import './title.css';

const Title = () => (
  <HashRouter>

    <header data-testid="logo" className="Header border border-dark d-flex p-2 bd-highlight">
      <h1 className=" d-inline-flex p-2 bd-highlight">BURGER QUEEN</h1>
      <img src={Logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link type="button" className="btn btn-outline-dark" to="/KitchenView"> Orden Cocina</Link>
            <Link type="button" className="btn btn-outline-dark" to="/ReadyOrdersView"> Pedidos Listos</Link>

          </li>
        </ul>
      </nav>

    </header>
  </HashRouter>
);

export default Title;
