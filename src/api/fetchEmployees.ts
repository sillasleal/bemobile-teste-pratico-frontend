import { Employee } from '../types/Employee';

export const fetchEmployees = async (query: string): Promise<Employee[]> => {
  const queryValue = query ? `?q=${query}` : '';
  const url = `http://localhost:3333/employees${queryValue}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching employees');
  }
  return response.json();
};
