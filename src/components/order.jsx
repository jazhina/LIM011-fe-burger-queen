import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({
  agregar, addOperation, total, deletePro,
}) {
  const [client, setclient] = useState('');
  function recorre() {
    return agregar
      .map((element) => <AddProducts agregar={element} addOperation={addOperation} total={total} deletePro={deletePro} />);
  }
  function send() {
    if (client === '') {
      alert('no hay nombre');
    } else {
      console.log(agregar);
    }
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
      <div className="container">
        <h2>Modal Example</h2>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                Modal body..
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      </div>
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
