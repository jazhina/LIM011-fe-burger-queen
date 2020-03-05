import React, { useState } from 'react';
import Desayuno from './desayuno';

const Menu = () => {
  const [count, setCount] = useState('');

  function myFunction(categoria) {
    console.log(categoria);

    return count === '' ? setCount(Desayuno(categoria)) : setCount('');
  } return (
    <nav>
      <button type="button" className="btn btn-warning" onClick={() => (myFunction(Desayuno))}>Desayuno</button>
      <button type="button" className="btn btn-dark">Hamburguesa</button>
      <button type="button" className="btn btn-warning">Acompañamiento</button>
      <button type="button" className="btn btn-dark">Bebidas</button>
      <ul>
        {' '}
        { count }
      </ul>
    </nav>
  );
};

export default Menu;
