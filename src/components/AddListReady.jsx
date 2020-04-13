import React from 'react';
import PropTypes from 'prop-types';
import DetailReady from './DetailReady';


function AddListReady({ objeto }) {
  const {
    cliente, estado, fecha, order,
  } = objeto;
  return (
    <section data-testid="addListReady">
      <div className="card waiter p-3 border border-dark readyCard">
        <div className="card-header border border-dark ">
          <p data-testid="readyItem" className="name-client">
            Cliente:
            {' '}
            {cliente}
          </p>

        </div>
        <div data-testid="readyItem" className="card-body">
          <div>
            Estado:
            {' '}
            {estado}

          </div>
          <div data-testid="readyItem">

            Fecha:

            <p>{fecha}</p>
          </div>

        </div>
        <hr className="hr" />
        <footer className="footerReady">
          <ul>
            Detalle:
            {' '}
            {Object.keys(order)
              .map((element) => <DetailReady key={element.id} detailReady={order[element]} />)}
          </ul>
        </footer>
      </div>
    </section>
  );
}
AddListReady.propTypes = {
  objeto: PropTypes
    .shape({
      cliente: PropTypes.string.isRequired,
      estado: PropTypes.string.isRequired,
      fecha: PropTypes.number.isRequired,
      order: PropTypes.string.isRequired,
    }).isRequired,
};


export default AddListReady;
