import React from 'react';
import PropTypes from 'prop-types';

function Aditional({ objeto, agregar, total }) {
/*   console.log(objeto); */

  return (
    <tr>
      <td data-testid="items">{objeto.descripcion}</td>
      <td data-testid="items">{objeto.precio}</td>
      <td>
        <input
          type="image"
          src="https://img.icons8.com/ultraviolet/40/000000/add.png"
          alt="Añadir producto"
          data-testid="agregar"
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

Aditional.propTypes = {
  objeto: PropTypes
    .shape({
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.string.isRequired,
    }).isRequired,
  agregar: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
export default Aditional;
