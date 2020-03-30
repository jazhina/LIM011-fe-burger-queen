import React from 'react';
import { render } from '@testing-library/react';
import Menu from '../components/menu';

describe('Title', () => {
  it('Debería mostrar el logo y el titulo de la aplicacion', () => {
    const container = render(<Menu />);
    const eleLogo = container.getByTestId('logo');
    expect(eleLogo).toBeInTheDocument();
  });
});
