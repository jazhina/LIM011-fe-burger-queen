import React from 'react';
import PropTypes from 'prop-types';


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
Detailkitchen.propTypes = {
  detail: PropTypes
    .shape({
      cantidad: PropTypes.string.isRequired,
      producto: PropTypes.string.isRequired,
    }).isRequired,
};

export default Detailkitchen;
