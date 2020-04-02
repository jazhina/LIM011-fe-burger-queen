import React from 'react';
import PropTypes from 'prop-types';
// import Order from './order';
// import { useCollection } from 'react-firebase-hooks/firestore';

function List({
  objeto, agregar, total,
}) {
  return (
    <tr>
      <td data-testid="items">{objeto.descripcion}</td>
      <td data-testid="items">{objeto.precio}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          data-testid="mostrar"
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
      precio: PropTypes.string.isRequired,
    }).isRequired,
  agregar: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
export default List;
