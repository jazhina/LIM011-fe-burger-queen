import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from '../conexion/firebase';
import Lista from './categoria';

const Menu = () => {
  const [array, setArray] = useState([]);

  const [value] = useCollection(
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
    setArray(guardar.filter((element) => element.categoria === categoria));
    console.log(JSON.stringify(array));
  }

  function listaDeElementos() {
    return array
      .map((element) => <Lista key={element.id} objeto={element} />);
  }

  return (
    <nav>
      <div className="d-flex flex-row bd-highlight mb-3">
        <button
          type="button"
          className="btn btn-warning p-2 bd-highlight"
          onClick={(event) => {
            event.preventDefault();
            cambiocategoria('desayuno');
          }}
        >
          Desayuno
        </button>
        <button
          type="button"
          className="btn btn-dark d-flex p-2 bd-highlight"
          onClick={(event) => {
            event.preventDefault();
            cambiocategoria('hamburguesa');
          }}
        >
          Hamburguesa
        </button>
        <button
          type="button"
          className="btn btn-warning d-flex p-2 bd-highlight"
          onClick={(event) => {
            event.preventDefault();
            cambiocategoria('acompañamiento');
          }}
        >
          Acompañamiento
        </button>
        <button
          type="button"
          className="btn btn-dark d-flex p-2 bd-highlight"
          onClick={(event) => {
            event.preventDefault();
            cambiocategoria('bebidas');
          }}
        >
          Bebidas
        </button>
      </div>
      <div />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          {listaDeElementos()}
        </tbody>
      </table>
    </nav>
  );
};
export default Menu;
