import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({ listaproductos }) {
  const [arrAddProducts, setArrAddProducts] = useState([]);

  function SaveObjtInArray() {
    const newArr = arrAddProducts.concat([listaproductos]);
    setArrAddProducts(newArr);
  }

  return (
    <table className="tabla table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">-</th>
          <th scope="col">Cantidad</th>
          <th scope="col">+</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {arrAddProducts.map((element) => <AddProducts key={element.id} PrintListProducts={element} />)}
      </tbody>
    </table>
  );
}
Order.propTypes = {
  listaproductos: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Order;
