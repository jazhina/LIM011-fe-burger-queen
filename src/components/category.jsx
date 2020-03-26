import React from 'react';
import PropTypes from 'prop-types';
// import Order from './order';
// import { useCollection } from 'react-firebase-hooks/firestore';

function List({
  objeto, agregar, total,
}) {
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
            console.log(objeto);
            agregar(objeto, true);
            total(objeto);
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
