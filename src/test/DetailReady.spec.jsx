import React from 'react';
import { render } from '@testing-library/react';
import DetailReady from '../components/DetailReady';

describe(('Componente DetailReady'), () => {
  it('Debería pintar en pantalla los productos listos para entregar', () => {
    const fnObjProducts = jest.fn();
    const container = render(<DetailReady detailReady={fnObjProducts} />);
    const ulShow = container.getByTestId('itemsReady');
    expect(ulShow).toBeTruthy();
  });
});
