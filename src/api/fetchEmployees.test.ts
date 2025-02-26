import { fetchEmployees } from './fetchEmployees';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: '1', name: 'John Doe', job: 'Developer', admission_date: '2020-01-01', phone: '1234567890', image: 'https://via.placeholder.com/40' }]),
  })
) as jest.Mock;

describe('fetchEmployees', () => {
  it('fetches employees successfully', async () => {
    const employees = await fetchEmployees('');
    expect(employees).toEqual([{ id: '1', name: 'John Doe', job: 'Developer', admission_date: '2020-01-01', phone: '1234567890', image: 'https://via.placeholder.com/40' }]);
  });

  it('throws an error when the fetch fails', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
      })
    );
    await expect(fetchEmployees('')).rejects.toThrow('Error fetching employees');
  });
});
