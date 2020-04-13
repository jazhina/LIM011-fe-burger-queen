import React from 'react';
import PropTypes from 'prop-types';

function ResumeOrder({
  data,
}) {
  return (
    <tr data-testid="resume">
      <td>{data.cantidad}</td>
      <td>{data.producto}</td>
      <td>{data.precio * data.cantidad}</td>
    </tr>
  );
}

ResumeOrder.propTypes = {
  data: PropTypes
    .shape({
      cantidad: PropTypes.string.isRequired,
      producto: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
    }).isRequired,
};
export default ResumeOrder;
