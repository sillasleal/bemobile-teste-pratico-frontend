import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('banner')).toBeInTheDocument();
  });
});
