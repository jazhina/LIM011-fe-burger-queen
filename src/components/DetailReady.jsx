import React from 'react';
import PropTypes from 'prop-types';


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
Detailkitchen.propTypes = {
  detailReady: PropTypes
    .shape({
      cantidad: PropTypes.string.isRequired,
      producto: PropTypes.string.isRequired,
    }).isRequired,
};

export default Detailkitchen;
