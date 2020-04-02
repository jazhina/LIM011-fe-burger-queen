import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AddProducts from '../components/addProducts';

it('Deberia pintar los productos que fueron seleccionados', () => {
  const fnDelete = jest.fn();
  const fnTotal = jest.fn();
  const fnCantidad = jest.fn();
  const objProducto = {
    cantidad: '3',
    producto: 'Hamburguesa doble vegetariana',
    precio: '15',
  };
  const container = render(<AddProducts data={objProducto} eliminar={fnDelete} addOperation={fnCantidad} total={fnTotal} />);
  const btnCantidad = container.getByTestId('agregar');
  const btnMenos = container.getByTestId('quitar');
  const listaDeNodos = container.getAllByTestId('products');
  const btnElimimar = container.getByTestId('eliminar');

  act(() => {
    fireEvent.click(btnCantidad, { preventDefault: () => {} });
  });

  expect(fnCantidad).toHaveBeenCalled();

  expect(getNodeText(listaDeNodos[0])).toBe('3');
  expect(getNodeText(listaDeNodos[1])).toBe('Hamburguesa doble vegetariana');
  expect(getNodeText(listaDeNodos[2])).toBe('45');
  act(() => {
    fireEvent.click(btnMenos, { preventDefault: () => {} });
  });
  expect(fnCantidad).toHaveBeenCalled();

  expect(getNodeText(listaDeNodos[0])).toBe('3');
  expect(getNodeText(listaDeNodos[1])).toBe('Hamburguesa doble vegetariana');
  expect(getNodeText(listaDeNodos[2])).toBe('45');

  act(() => {
    fireEvent.click(btnElimimar, { preventDefault: () => {} });
  });
  expect(fnDelete).toHaveBeenCalled();
});
