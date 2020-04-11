import React from 'react';

function Detailkitchen({ detailReady }) {
  return (
    <section>
      <li>
        {detailReady.cantidad}
        {' '}
        {detailReady.producto}
      </li>
    </section>
  );
}

export default Detailkitchen;
