import React from 'react';
import PropTypes from 'prop-types';

function SummaryOrder({
  data,
}) {
  return (
    <tr>
      <td data-testid="products">{data.cantidad}</td>
      <td data-testid="products">{data.producto}</td>
      <td data-testid="products">{data.precio * data.cantidad}</td>
    </tr>
  );
}

SummaryOrder.propTypes = {
  data: PropTypes
    .shape({
      cantidad: PropTypes.string.isRequired,
      producto: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
    }).isRequired,
};
export default SummaryOrder;
