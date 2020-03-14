import React from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order() {
/*   const [arrayOrder, setArrayOrder] = useState([]);
  const newarray = arrayOrder.concat([agregar]);
  setArrayOrder(newarray);
  console.log({ agregar });

  function Listproducts() {
    return arrayOrder
      .map((element) => <AddProducts key={element.id} agregar={agregar} />);
  } */
  return (
    <table className="table table-bordered table-dark">
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
        <td> </td>
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
