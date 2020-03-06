import React from 'react';
// import PropTypes from 'prop-types';
// import { useCollection } from 'react-firebase-hooks/firestore';
// import Menu from './menu';

function Lista({ objeto }) {
  return (
    <li>
      <p>{objeto.descripcion}</p>
      <p>{objeto.precio}</p>
    </li>
  );
}

/* Lista.propTypes = {
  categoria: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
}; */

export default Lista;
