import React from 'react';
import PropTypes from 'prop-types';

function Order({ listaproductos }) {
  const array = [];
  array.push(listaproductos.map((element) => (
    <tr>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
          alt="Restar producto"
        />
      </td>
      <td>{element.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
        />
      </td>
      <td>{element.producto}</td>
      <td>{element.precio}</td>
      <td><input type="image" src="https://img.icons8.com/clouds/100/000000/trash.png" alt="Eliminar producto" /></td>
    </tr>
  )));

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
        {array}
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
  // array: PropTypes.PropTypes.arrayOf(PropTypes.ofType([PropTypes.number, PropTypes.string])).isRequired,
};

export default Order;
