import React from 'react';
import DetailReady from './DetailReady';

function AddListReady({ objeto }) {
  const {cliente, estado, fecha, order} = objeto;
  return (
    <section data-testid="addListReady">
      <div className="card waiter p-3">
        <div className="card-header">
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
        <hr />
        <footer className="">
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


export default AddListReady;
