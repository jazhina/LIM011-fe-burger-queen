import React from 'react';
import PropTypes from 'prop-types';
// import Order from './order';
// import { useCollection } from 'react-firebase-hooks/firestore';

function AddProducts({ agregar }) {
  console.log({ agregar });
  return (
    <tr>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
          alt="Restar producto"
        />
      </td>
      <td>{agregar.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
        />
      </td>
      <td>{agregar.producto}</td>
      <td>{agregar.precio}</td>
      <td><input type="image" src="https://img.icons8.com/clouds/100/000000/trash.png" alt="Eliminar producto" /></td>
    </tr>
  );
}

AddProducts.propTypes = {
  agregar: PropTypes
    .shape({
      cantidad: PropTypes.number.isRequired,
      producto: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    }).isRequired,
};
export default AddProducts;
