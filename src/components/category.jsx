import React from 'react';
import PropTypes from 'prop-types';

function List({ objeto, agregar }) {
  return (
    <tr>
      <td>{objeto.descripcion}</td>
      <td>{objeto.precio}</td>
      <td>

        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="add product"
          onClick={(event) => {
            event.preventDefault();
            agregar(objeto);
          }}
        />
      </td>
    </tr>
  );
}

List.propTypes = {
  objeto: PropTypes
    .shape({
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    }).isRequired,
  agregar: PropTypes.func.isRequired,

};

export default List;
