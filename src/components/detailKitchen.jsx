import React from 'react';

function Detailkitchen({ detail }) {
  return (
    <ul data-testid="itemsKitchen">
      <li>
        {detail.cantidad}
        {' '}
        {detail.producto}
      </li>
    </ul>
  );
}

export default Detailkitchen;
