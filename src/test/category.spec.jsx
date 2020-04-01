import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import List from '../components/category';

it('Deberia pintar los productos segun categoria', () => {
  const fnTotal = jest.fn();
  const fnAgregar = jest.fn();
  const objProducts = {
    descripcion: 'Cafe Americano',
    precio: '5',
  };
  const container = render(<List objeto={objProducts} agregar={fnAgregar} total={fnTotal} />);
  const btnAgregar = container.getByTestId('mostrar');
  const listaDeNodos = container.getAllByTestId('items');

  act(() => {
    fireEvent.click(btnAgregar, { preventDefault: () => {} });
  });
  expect(fnAgregar).toHaveBeenCalled();

  expect(getNodeText(listaDeNodos[0])).toBe('Cafe Americano');
  expect(getNodeText(listaDeNodos[1])).toBe('5');
});
