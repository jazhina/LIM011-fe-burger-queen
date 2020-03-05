import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';

import Lista from './categoria';

const Menu = () => {
  const [count, setCount] = useState([]);

  const [value, loading, error] = useCollection(
    firebase.firestore().collection('menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  function cambiocategoria(categoria) {
    const guardar = value.docs.map((element) => {
      const obj = {
        categoria: element.data().categoria,
        descripcion: element.data().item,
        precio: element.data().precio,
        id: element.id,
      };
      return obj;
    });
    const filter = guardar.filter((element) => element.categoria === categoria);
    console.log(filter);
  } return (
    <nav>
      <Lista />
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          event.preventDefault();
          cambiocategoria('desayuno');
        }}
      >
        Desayuno
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(event) => {
          event.preventDefault();
          cambiocategoria('hamburguesa');
        }}
      >
        Hamburguesa
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={(event) => {
          event.preventDefault();
          cambiocategoria('acompañamiento');
        }}
      >
        Acompañamiento
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(event) => {
          event.preventDefault();
          cambiocategoria('bebidas');
        }}
      >
        Bebidas
      </button>
      <ul>
        {[]}
        {count}
      </ul>
    </nav>
  );
};
export default Menu;
