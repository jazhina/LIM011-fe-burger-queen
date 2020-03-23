import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddProducts from './addProducts';

function Order({
  data, addOperation, total, eliminar,
}) {
  const [client, setclient] = useState('');
  const recorre = () => data.map((element) => (
    <AddProducts
      data={element}
      addOperation={addOperation}
      total={total}
      eliminar={eliminar}
    />
  ));
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
          <tr>
            <th COLSPAN="3">Total</th>
            <th>S/ </th>
            <th COLSPAN="2">
              {total()}
            </th>
          </tr>
        </tbody>
      </table>
      <div className="container">
        <a href="#exampleModal" className="btn btn-primary btn-lg" data-toggle="modal">
          Confirmar pedido
        </a>

        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Order.propTypes = {
  data: PropTypes
    .shape({
      producto: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
    }).isRequired,
  addOperation: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired,
};

export default Order;
