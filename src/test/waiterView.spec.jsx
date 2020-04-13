import React from 'react';
import { render } from '@testing-library/react';
import WaiterView from '../view/waiterView';

describe('WaiterView', () => {
  it('Mostrar los componentes Menu y Orden', () => {
    const container = render(<WaiterView />);
    const mostrar = container.getByTestId('containerWaiterView');
    expect(mostrar).toBeTruthy();
  });
});
