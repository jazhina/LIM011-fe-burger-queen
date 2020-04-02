import React from 'react';
import { render } from '@testing-library/react';
import Title from '../components/title';

describe('Title', () => {
  it('Debería mostrar el logo y el titulo de la aplicacion', () => {
    const container = render(<Title />);
    const eleLogo = container.getByTestId('logo');
    expect(eleLogo).toBeTruthy();
  });
});
