import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchField from './SearchField';

describe('SearchField', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchField placeholder="Pesquisar" onSearch={() => {}} />);
    expect(getByPlaceholderText('Pesquisar')).toBeInTheDocument();
  });

  it('calls onSearch with the correct value', () => {
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(<SearchField placeholder="Pesquisar" onSearch={onSearch} />);
    const input = getByPlaceholderText('Pesquisar');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
