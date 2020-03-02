import React, { useState } from 'react';
import Desayuno  from '../componentes/desayuno.js';

const Menu = () => {
    const [count, setCount] = useState(''); 
   return (
   <nav>
       <button type="button" className="btn btn-warning" onClick = { () => count === '' ? setCount(Desayuno) : setCount('') }>Desayuno</button>
       <button type="button" className="btn btn-dark" >Hamburguesa</button>
       <button type="button" className="btn btn-warning">Acompañamiento</button>
       <button type="button" className="btn btn-dark">Bebidas</button>
       <ul> {count }</ul>
   </nav>
   )
};

export default Menu;