import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Menu from '../components/menu';

it('Debería pintar los productos segun su categoria', (done) => {
  const fnAgregar = jest.fn();
  const fnTotal = jest.fn();
  const container = render(<Menu agregar={fnAgregar} total={fnTotal} />);
  const primero = container.getAllByAltText('Añadir producto').length;
  const buttonDesayuno = container.getByTestId('desayuno');

  act(() => {
    fireEvent.click(buttonDesayuno);
  });
  wait(() => container.getAllByAltText('Añadir producto')).then(() => {
    const segundo = container.getAllByAltText('Añadir producto').length;
    expect(primero).not.toEqual(segundo);
    done();
  });
});
