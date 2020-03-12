import React from 'react';
import PropTypes from 'prop-types';

function AddProducts({ PrintListProducts }) {
  return (
    <tr>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/minus.png"
          alt="Restar producto"
        />
      </td>
      <td>{PrintListProducts.cantidad}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
        />
      </td>
      <td>{PrintListProducts.producto}</td>
      <td>{PrintListProducts.precio}</td>
      <td><input type="image" src="https://img.icons8.com/clouds/100/000000/trash.png" alt="Eliminar producto" /></td>
    </tr>
  );
}
AddProducts.propTypes = {
  PrintListProducts: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      cantidad: PropTypes.number.isRequired,
      precio: PropTypes.number.isRequired,
    }).isRequired,
};
export default AddProducts;
