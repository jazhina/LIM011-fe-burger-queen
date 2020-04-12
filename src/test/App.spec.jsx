import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../App';

it('', async () => {
  const router = render(<BrowserRouter><App /></BrowserRouter>);
  const rutas = router.queryByTestId('');
  expect(rutas).toBe(null);
});
