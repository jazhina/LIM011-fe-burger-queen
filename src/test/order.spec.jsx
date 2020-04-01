import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Order from '../components/order';

describe('Order', () => {
  it('Debería mostrar tabla', () => {
    const fnData = jest.fn();
    const fnAddOperation = jest.fn();
    const fnTotal = jest.fn();
    const fnEliminar = jest.fn();
    const fnNewTotal = jest.fn();
    const fnReset = jest.fn();
    const fnEnviar = jest.fn();
    const container = render(<Order data={fnData} addOperation={fnAddOperation} total={fnTotal} eliminar={fnEliminar} newtotal={fnNewTotal} reset={fnReset} />);
    const input = container.getByTestId('input');
    /*     const tabla = container.getByTestId('mostrarTabla');
    const btnconfirmar = container.getByTestId('confirmarpedido'); */
    const btnenviar = container.getByTestId('enviarcocina');
    act(() => {
      fireEvent.click(input, { target: { value: 'Hola' } });
    });
    expect(input.value).toBe('Hola');
    act(() => {
      fireEvent.click(btnenviar, { preventDefault: () => {} });
    });
    expect(fnEnviar).toHaveBeenCalled();
    expect(input.value).toBe('');
  });
});
