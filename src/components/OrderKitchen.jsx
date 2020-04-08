import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';
import AddNotes from './addNotes';
import './OrderKitchen.css';

const OrderKitchen = () => {
  const [kitchen, setKitchen] = useState([]);
  const [value, loading, error] = useCollectionData(
    firebase.firestore().collection('orders').orderBy('newobj.fecha', 'asc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );
  const dataOrder = () => {
    const data = value.map((element) => {
      const date = element.newobj.fecha.toDate().toString();
      const obj = {
        ID: element.ID,
        cliente: element.newobj.cliente,
        fecha: date.substring(0, date.indexOf('GMT')),
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
    setKitchen(data);
    console.log(JSON.stringify(kitchen));
  };
  function ListNotes() {
    if (loading) {
      return 'Cargando...';
    }
    if (error) {
      return 'Hubo un error';
    }
    return kitchen
      .map((element) => <AddNotes key={element.id} objeto={element} />);
  }
  return (
    <section className="view">
      <header className="text-center  d-flex justify-content-center">
        <h2 className="title-viewKitchen"> Órdenes en espera... </h2>

      </header>
      <main>
        <ul>
          <ListNotes />
        </ul>
      </main>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(event) => {
          event.preventDefault();
          dataOrder();
        }}
      >
        Orden
      </button>
    </section>
  );
};
export default OrderKitchen;
