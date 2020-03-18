import React from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({ agregar }) {
  console.log(agregar);

  return (
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">-</th>
          <th scope="col">Cantidad</th>
          <th scope="col">+</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>

        <AddProducts agregar={agregar} />
      </tbody>
    </table>
  );
}
Order.propTypes = {
  listaproductos: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Order;
