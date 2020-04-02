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
    const container = render(<Order data={fnData} addOperation={fnAddOperation} total={fnTotal} eliminar={fnEliminar} newtotal={fnNewTotal} reset={fnReset} />);
    const input = container.getByTestId('input');
    const tabla = container.getByTestId('mostrarTabla');
    const btnconfirmar = container.getByTestId('confirmarpedido');
    const modal = container.getByTestId('modal');
    const btnenviar = container.getByTestId('enviarcocina');

    act(() => {
      fireEvent.click(input, { target: { value: 'Carlos' } });
    });

    expect(input.value).toBe('Carlos');
    expect(tabla).toBeTruthy();
    act(() => {
      fireEvent.click(btnconfirmar, { preventDefault: () => {} });
    });
    expect(modal).toBeTruthy();
    act(() => {
      fireEvent.click(btnenviar, { preventDefault: () => {} });
    });
    act(() => {
      fireEvent.click(input, { target: { value: '' } });
    });
    expect(input.value).toBe('');
  });
});
