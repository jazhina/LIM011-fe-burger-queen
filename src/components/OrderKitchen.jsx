
/* import React from 'react'; */
import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

const OrderKitchen = () => {
  const [kitchen, setKitchen] = useState([]);
  const [value] = useCollection(
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
  return (
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
  );
};
export default OrderKitchen;
