import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import AddListReady from '../components/AddListReady';

describe('AddListReady', () => {
  it('Debería mostrarme la información de cada pedido que ya está listo', () => {
    const objeto = {
      cliente: 'Carlos',
      estado: 'Listo',
      fecha: 'Thu Apr 09 2020 17:05:41',
    };
    const container = render(<AddListReady objeto={objeto} />);
    const listNodos = container.getAllByText('readyItem');
    expect(getNodeText(listNodos[0])).toBe('Carlos');
    expect(getNodeText(listNodos[1])).toBe('Listo');
    expect(getNodeText(listNodos[2])).toBe('Thu Apr 09 2020 17:05:41');
  });
});
