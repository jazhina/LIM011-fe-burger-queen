import React from 'react';
import { render } from '@testing-library/react';
import WaiterView from '../view/waiterView';

describe('WaiterView', () => {
  it('Deberia mostrar el logo y la imagen de la Aplicacion', () => {
    const title = () => <h1>BURGUER QUEEN</h1>;
    const { debug } = render(<WaiterView />);
    debug();
  });
});
