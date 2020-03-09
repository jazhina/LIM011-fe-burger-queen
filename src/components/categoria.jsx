import React from 'react';
// import PropTypes from 'prop-types';
// import { useCollection } from 'react-firebase-hooks/firestore';

function Lista({ objeto }) {
  return (
    <tr>
      <td>{objeto.descripcion}</td>
      <td>{objeto.precio}</td>
      <td><img src="https://img.icons8.com/ultraviolet/40/000000/add.png" /></td>
    </tr>

  );
}

/* Lista.propTypes = {
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
}; */

export default Lista;
