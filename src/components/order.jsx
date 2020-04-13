import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import AddProducts from './AddProducts';
import ResumeOrder from './ResumeOrder';

function Order({
  data, addOperation, total, eliminar, newtotal, reset,
}) {
  const [client, setclient] = useState('');
  const recorre = () => Object.keys(data).map((element) => (
    <AddProducts
      data={data[element]}
      addOperation={addOperation}
      total={total}
      eliminar={eliminar}
    />
  ));
  const containerModal = () => Object.keys(data).map((element) => (
    <ResumeOrder
      data={data[element]}
    />
  ));
  function NameClient(event) {
    const valor = event.target.value;
    // console.log(valor);
    setclient(valor);
  }

  const SendKitchen = (obj) => {
    const newobj = {
      cliente: client,
      order: obj,
      total: newtotal,
      fecha: new Date(),
    };
    firebase.firestore()
      .collection('orders')
      .add({
        newobj,
      }).then((objeto) => {
        // console.log(objeto.id);
        firebase.firestore()
          .collection('orders').doc(objeto.id).update({
            ID: objeto.id,
            estado: '',
            tiempo_espera: '',
          });
      });
    /*     console.log(newobj); */
    setclient('');
    reset();
  };
  return (
    <div>
      <span>Nombre del cliente</span>
      <input data-testid="input" type="text" value={client} onChange={NameClient} />
      <table data-testid="mostrarTabla" className="table table-bordered table-dark">
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
            <th colSpan="3">Total</th>
            <th>S/ </th>
            <th colSpan="2">
              {total()}
            </th>
          </tr>
        </tbody>
      </table>
      <div className="container">

        <button
          type="button"
          id="button"
          className="btn btn-secondary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-testid="confirmarpedido"
          disabled={client === ''}
        >
          Confirmar pedido
        </button>
        <div className="modal fade" id="exampleModal" data-testid="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Resumen pedido</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5>
                  Cliente:
                  {' '}
                  {client}
                </h5>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Productos</th>
                      <th scope="col">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {containerModal()}
                    <tr>
                      <th colSpan="2">Total</th>
                      <th>
                        {total()}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-testid="enviarcocina"
                  onClick={(event) => {
                    event.preventDefault();
                    SendKitchen(data);
                  }}
                >
                  Enviar a cocina
                </button>
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
  newtotal: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
  eliminar: PropTypes.func.isRequired,
};

export default Order;
