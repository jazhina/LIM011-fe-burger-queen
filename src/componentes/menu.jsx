import React, { useState } from 'react';
import Lista from './categoria';

const Menu = () => {
  const [count, setCount] = useState([]);
  /*   function cambiocategoria(categoria) {
    console.log(categoria);
    return count === [] ? setCount(Lista('desayuno')) : setCount([]);
  }  */return (
    <nav>
      <Lista />
      <button type="button" className="btn btn-warning" onClick={() => (count === [] ? setCount(Lista) : setCount([]))}>Desayuno</button>
      <button type="button" className="btn btn-dark" name="hamburguesa">Hamburguesa</button>
      <button type="button" className="btn btn-warning" name="acompañamiento">Acompañamiento</button>
      <button type="button" className="btn btn-dark">Bebidas</button>
      <ul>
        {[]}
        {count}
      </ul>
    </nav>
  );
};

export default Menu;
