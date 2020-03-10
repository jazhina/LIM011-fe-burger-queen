import React from 'react';
import PropTypes from 'prop-types';
import AñadirPedido from './order';
// import { useCollection } from 'react-firebase-hooks/firestore';

function List({ objeto }) {
  return (
    <tr>
      <td>{objeto.descripcion}</td>
      <td>{objeto.precio}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          onClick={(event) => {
            event.preventDefault();
            AñadirPedido(objeto);
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
};
export default List;
