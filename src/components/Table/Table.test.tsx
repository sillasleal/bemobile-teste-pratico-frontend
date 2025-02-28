import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '.';
import { Employee } from '../../types/Employee';

const employees: Employee[] = [
  { id: '1', name: 'John Doe', job: 'Developer', admission_date: '2020-01-01T00:00:00.000Z', phone: '1234567890', image: 'https://via.placeholder.com/40' },
  { id: '2', name: 'Jane Smith', job: 'Designer', admission_date: '2019-12-31T00:00:00.000Z', phone: '0987654321', image: 'https://via.placeholder.com/40' },
];

describe('Table', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Table employees={employees} />);
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('Jane Smith')).toBeInTheDocument();
  });

  it('expands and collapses rows correctly', () => {
    const { getAllByTitle, queryByText } = render(<Table employees={employees} />);
    const toggleButton = getAllByTitle('Toggle Details')[0];
    fireEvent.click(toggleButton);
    expect(queryByText('CARGO:')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(queryByText('CARGO:')).not.toBeInTheDocument();
  });
});
