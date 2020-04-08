import React from 'react';

function Detailkitchen({ detail }) {
  const { cantidad, producto } = detail;
  return (
    <ul>
      <li>
        {cantidad}
        {' '}
        {producto}
      </li>
    </ul>
  );
}

export default Detailkitchen;
