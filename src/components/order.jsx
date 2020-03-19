import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({ agregar, addOperation, total }) {
  const [client, setclient] = useState('');
  function recorre() {
    return agregar
      .map((element) => <AddProducts agregar={element} addOperation={addOperation} total={total} />);
  }
  function NameClient(event) {
    // event.preventDefault();
    const valor = event.target.value;
    console.log(valor);
    setclient(valor);
  }
  return (
    <div>
      <span>Nombre del cliente</span>
      <input type="text" value={client} onChange={NameClient} />
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
          {recorre()}
        </tbody>
        <td>Total</td>
        {total()}
      </table>
    </div>
  );
}
Order.propTypes = {
  agregar: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    }).isRequired,
  addOperation: PropTypes.func.isRequired,
};

export default Order;
