import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchField from './SearchField';

describe('SearchField', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<SearchField placeholder="Pesquisar" onSearch={() => {}} />);
    expect(getByPlaceholderText('Pesquisar')).toBeInTheDocument();
  });

  it('calls onSearch with the correct value', async () => {
    const onSearch = vi.fn();
    const { getByPlaceholderText } = render(<SearchField placeholder="Pesquisar" onSearch={onSearch} />);
    const input = getByPlaceholderText('Pesquisar');
    fireEvent.change(input, { target: { value: 'test' } });
    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith('test');
    });
  });
});
