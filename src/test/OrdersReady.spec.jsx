import React from 'react';
import { render } from '@testing-library/react';
import OrdersReady from '../components/OrdersReady';

describe('OrdersReady', () => {
  it('Mostrar los componentes Menu y Orden', () => {
    const container = render(<OrdersReady />);
    const mostrar = container.getByTestId('containerOrdersReady');
    expect(mostrar).toBeTruthy();
  });
});
