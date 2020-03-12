import React from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({ PrintListProducts }) {
  /* const [arrAddProducts, setArrAddProducts] = useState([]);

  function SaveObjtInArray() {
    const newArr = arrAddProducts.concat([listaproductos]);
    setArrAddProducts(newArr);
  } */

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

        <AddProducts key={PrintListProducts.id} PrintListProducts={PrintListProducts} />
        )
      </tbody>
    </table>
  );
}
Order.propTypes = {
  PrintListProducts: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    }).isRequired,
};

export default Order;
