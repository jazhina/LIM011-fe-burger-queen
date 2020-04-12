import React from 'react';

function Detailkitchen({ detailReady }) {
  return (
    <section data-testid="itemsReady">
      <li>
        {detailReady.cantidad}
        {' '}
        {detailReady.producto}
      </li>
    </section>
  );
}

export default Detailkitchen;
