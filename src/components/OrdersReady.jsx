import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import firebase from '../conexion/firebase';
import AddListReady from './AddListReady';

import './OrderKitchen.css';

const OrdersReady = () => {
  const [ready, setReady] = useState([]);
  const [value, loading, error] = useCollectionData(
    firebase.firestore().collection('orders').orderBy('newobj.fecha', 'asc'),
  );
  const showOrdersReady = () => {
    const filterData = value.filter((ele) => ele.estado === 'Listo');
    const dataOrder = filterData.map((element) => {
      const date = element.newobj.fecha.toDate().toString();
      const obj = {
        ID: element.ID,
        cliente: element.newobj.cliente,
        estado: element.estado,
        fecha: date.substring(0, date.indexOf('GMT')),
        tiempo_espera: element.tiempo_espera,
        order: element.newobj.order.map((elemt) => {
          const detalle = {
            cantidad: elemt.cantidad,
            producto: elemt.producto,
          };
          return detalle;
        }),
      };
      return obj;
    });
    setReady(dataOrder);
  };
  function listReady() {
    if (loading) {
      return 'Cargando...';
    }
    if (error) {
      return 'Hubo un error';
    }
    return ready
      .map((element) => <AddListReady key={element.id} objeto={element} />);
  }
  return (
    <section className="view">
      <header className="ReadysHeader">
        <h2> Pedidos Listos</h2>
        <button
          type="button"
          className="btn btn-dark"
          onClick={(event) => {
            event.preventDefault();
            showOrdersReady();
          }}
        >
          Orden
        </button>
        <Link to="/WaiterView">
          <img alt="return" src="https://img.icons8.com/ios/50/000000/left2.png" />
        </Link>

      </header>
      <div className="card-columns">
        <blockquote className="blockquote mb-0 card-body">
          <main>
            {listReady()}

          </main>
        </blockquote>
      </div>
    </section>
  );
};
export default OrdersReady;
