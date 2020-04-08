import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';
import AddNotes from './addNotes';
import './OrderKitchen.css';

const OrderKitchen = () => {
  const [kitchen, setKitchen] = useState([]);
  const [value, loading, error] = useCollection(
    firebase.firestore().collection('orders').orderBy('newobj.fecha', 'asc'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );
  const dataOrder = () => {
    const data = value.docs.map((element) => {
      const obj = {
        cliente: element.data().newobj.cliente,
        estado: element.data().newobj.estado,
        fecha: element.data().newobj.fecha.toDate(),
        order: element.data().newobj.order.map((elemt) => {
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
          {ListNotes()}

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
