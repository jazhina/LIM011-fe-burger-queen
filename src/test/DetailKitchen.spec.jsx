import React from 'react';
import { render } from '@testing-library/react';
import DetailKitchen from '../components/detailKitchen';

describe(('Componente detailKitchen'), () => {
  it('Debería pintar en pantalla los productos listos para entregar', () => {
    const fnObjProducts = jest.fn();
    const container = render(<DetailKitchen detail={fnObjProducts} />);
    const ulShow = container.getByTestId('itemsKitchen');
    expect(ulShow).toBeTruthy();
  });
});
