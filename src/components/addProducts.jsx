import React from 'react';
import PropTypes from 'prop-types';

function AddProducts({
  data, addOperation, total, eliminar,
}) {
  console.log(data);
  return (
    <tr>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
          alt="Restar producto"
          onClick={(event) => {
            event.preventDefault();
            addOperation(data, false);
            total();
          }}
        />
      </td>
      <td>{data.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          onClick={(event) => {
            event.preventDefault();
            addOperation(data, true);
            total();
          }}
        />
      </td>
      <td>{data.producto}</td>
      <td>{data.precio * data.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/officel/40/000000/delete-sign.png"
          alt="Eliminar producto"
          onClick={(event) => {
            event.preventDefault();
            eliminar(data);
            total();
          }}
        />
      </td>

    </tr>
  );
}

AddProducts.propTypes = {
  data: PropTypes
    .shape({
      cantidad: PropTypes.number.isRequired,
      producto: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    }).isRequired,
  addOperation: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
export default AddProducts;
