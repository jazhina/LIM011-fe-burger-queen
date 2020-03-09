import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';
import './menu.css';
import Lista from './categoria';

const Menu = () => {
  const [array, setArray] = useState([]);

  const [value] = useCollection(
    firebase.firestore().collection('menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  function ChangeCategory(categoria) {
    const guardar = value.docs.map((element) => {
      const obj = {
        categoria: element.data().categoria,
        descripcion: element.data().item,
        precio: element.data().precio,
        id: element.id,
      };
      return obj;
    });
    setArray(guardar.filter((element) => element.categoria === categoria));
  }
  function ListElements() {
    return array
      .map((element) => <Lista key={element.id} objeto={element} />);
  }

  return (
    <nav>
      <Lista />
      <button
        type="button"
        className="Desayuno btn btn-info"
        onClick={(event) => {
          event.preventDefault();
          ChangeCategory('desayuno');
        }}
      >
        Desayuno
      </button>
      <button
        type="button"
        className="Hamburguesa btn btn-dark"
        onClick={(event) => {
          event.preventDefault();
          ChangeCategory('hamburguesa');
        }}
      >
        Hamburguesa
      </button>
      <button
        type="button"
        className="Acompañamiento btn btn-info"
        onClick={(event) => {
          event.preventDefault();
          ChangeCategory('acompañamiento');
        }}
      >
        Acompañamiento
      </button>
      <button
        type="button"
        className="Bebidas btn btn-dark"
        onClick={(event) => {
          event.preventDefault();
          ChangeCategory('bebidas');
        }}
      >
        Bebidas
      </button>
      <div>
        <ul>
          {ListElements()}
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
