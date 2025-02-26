import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from './Table';
import { Employee } from '../types/Employee';

const employees: Employee[] = [
  { id: '1', name: 'John Doe', job: 'Developer', admission_date: '2020-01-01', phone: '1234567890', image: 'https://via.placeholder.com/40' },
  { id: '2', name: 'Jane Smith', job: 'Designer', admission_date: '2019-12-31', phone: '0987654321', image: 'https://via.placeholder.com/40' },
];

describe('Table', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Table employees={employees} />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
  });

  it('expands and collapses rows correctly', () => {
    const { getByText, getByTitle } = render(<Table employees={employees} />);
    const toggleButton = getByTitle('Toggle Details');
    fireEvent.click(toggleButton);
    expect(getByText('CARGO: Developer')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(getByText('CARGO: Developer')).not.toBeInTheDocument();
  });
});
