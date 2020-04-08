import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import PropTypes from 'prop-types';
import firebase from '../conexion/firebase';
import './menu.css';
import List from './category';
import Aditional from './aditional';

const Menu = ({ agregar, total }) => {
  const [array, setArray] = useState([]);
  const [arrayAditio, setAditio] = useState([]);

  const [value, loading, error] = useCollection(
    firebase.firestore().collection('menu'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  function ChangeCategory(categoria) {
    const save = value.docs.map((element) => {
      const obj = {
        categoria: element.data().categoria,
        descripcion: element.data().item,
        precio: element.data().precio,
        id: element.id,
      };
      return obj;
    });
    /* setArray(save.filter((products) => products.categoria === categoria)); */
    if (categoria === 'adicional') {
      setAditio(save.filter((products) => products.categoria === 'adicional'));
    } if (categoria !== 'adicional') {
      setArray(save.filter((products) => products.categoria === categoria));
    }
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(array));
  }

  function ListElements() {
    if (loading) {
      return 'Cargando...';
    }
    if (error) {
      return 'Hubo un error';
    }
    return array
      .map((element) => <List key={element.id} objeto={element} agregar={agregar} total={total} />);
  }
  function AdicionalFunction() {
    if (loading) {
      return 'Cargando...';
    }
    if (error) {
      return 'Hubo un error';
    }
    return arrayAditio
      .map((element) => <Aditional key={element.id} objeto={element} agregar={agregar} total={total} aditionalFunction={AdicionalFunction} />);
  }

  return (
    <nav>
      <button
        type="button"
        className="Desayuno btn btn-info"
        data-testid="desayuno"
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
      <table className="table table-striped">
        <thead className="tabla-orden">
          <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Agregar</th>
          </tr>
        </thead>
        <tbody>
          {ListElements()}
        </tbody>
      </table>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#myModal"
          disabled={array === 'hamburguesa'}
          onClick={(event) => {
            event.preventDefault();
            ChangeCategory('adicional');
          }}
        >
          Adicional
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"> Adicionales </h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body" />
              <table className="table table-striped">
                <thead className="tabla-orden">
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Agregar</th>
                  </tr>
                </thead>
                <tbody>
                  {AdicionalFunction()}
                </tbody>
              </table>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};
Menu.propTypes = {
  agregar: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
export default Menu;
