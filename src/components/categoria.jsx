import React from 'react';
// import PropTypes from 'prop-types';
// import { useCollection } from 'react-firebase-hooks/firestore';

function List({ objeto }) {
  return (
    <tr>
      <td>{objeto.descripcion}</td>
      <td>{objeto.precio}</td>
      <td><img src="https://img.icons8.com/ultraviolet/40/000000/add.png" /></td>
    </tr>
  );
}

export default List;
