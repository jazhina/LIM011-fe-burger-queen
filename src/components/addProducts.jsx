import React from 'react';
import PropTypes from 'prop-types';

function AddProducts({ agregar, addOperation, total }) {
  console.log(agregar);
  return (
    <tr>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
          alt="Restar producto"
          onClick={(event) => {
            event.preventDefault();
            addOperation(agregar, false);
          }}
        />
      </td>
      <td>{agregar.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          onClick={(event) => {
            event.preventDefault();
            addOperation(agregar, true);
            total(agregar);
          }}
        />
      </td>
      <td>{agregar.producto}</td>
      <td>{agregar.precio * agregar.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/clouds/100/000000/trash.png"
          alt="Eliminar producto"
          onClick={(event) => {
            event.preventDefault();
            addOperation(agregar, 'delete');
          }}
        />
      </td>

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
  addOperation: PropTypes.func.isRequired,
};
export default AddProducts;
