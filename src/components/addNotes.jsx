import React from 'react';
import './OrderKitchen.css';
// import PropTypes from 'prop-types';

function AddNotes({ objeto }) {
  return (
    <section>
      <div className="container">
        <div className="row" />
        <div className="col-lg-4" />
        <div className="card">
          <div className="card-section border rounded p-3">
            <div className="card-header">
              <p className="name-client">
                Cliente:
                {' '}
                {objeto.cliente}
              </p>

            </div>
            <div className="card-body">
              <li>
                Orden:
                {' '}
                {objeto.producto}
              </li>
              <li>
                Fecha:
                {' '}
              </li>
              <hr />
              <input type="checkbox" id="listo" />
              <span htmlFor="listo"> Listo </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AddNotes;
