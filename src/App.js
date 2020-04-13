import React from 'react';
import { HashRouter } from 'react-router-dom';
// import logo from './logo.svg';
/* import WaiterView from './view/waiterView';
import KitchenView from './view/KitchenView'; */
import Routes from './Routes';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes />
      </div>
    </HashRouter>
  );
}
export default App;
