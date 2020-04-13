import React from 'react';
import { render } from '@testing-library/react';
import ResumeOrder from '../components/ResumeOrder';

it('Debería devolver un resumen del pedido', () => {
  const objProducts = {
    cantidad: '3',
    producto: 'Hamburguesa doble vegetariana',
    precio: '15',
  };
  const container = render(<ResumeOrder data={objProducts} />);
  const resume = container.getByTestId('resume');
  expect(resume).toBeTruthy();
});
