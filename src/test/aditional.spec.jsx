import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Aditional from '../components/aditional';

it('Deberia pintar los productos adicionales que fueron seleccionados', () => {
  const fnTotal = jest.fn();
  const fnAgregar = jest.fn();
  const objProducto = {
    descripcion: 'Hamburguesa doble vegetariana',
    precio: '15',
  };
  const container = render(<Aditional objeto={objProducto} agregar={fnAgregar} total={fnTotal} />);
  const listaDeNodos = container.getAllByTestId('items');
  const btnAgregar = container.getByTestId('agregar');

  act(() => {
    fireEvent.click(btnAgregar, { preventDefault: () => {} });
  });
  expect(fnAgregar).toHaveBeenCalled();

  expect(getNodeText(listaDeNodos[0])).toBe('Hamburguesa doble vegetariana');
  expect(getNodeText(listaDeNodos[1])).toBe('15');
});
