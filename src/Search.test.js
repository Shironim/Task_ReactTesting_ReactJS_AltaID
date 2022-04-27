import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
// import { act } from 'react-dom/test-utils';

import SearchScreen from './screen/Search';

jest.mock('axios');

describe('SearchScreen', () => {
  test('renders SearchScreen Screen', () => {
    render(<SearchScreen />);
    expect(screen.getByText(/Cari Cerita/)).toBeInTheDocument();
  });

  test('Fetch cerita from API and display', async () => {
    const story = [
      { id: 1, title: "satu" },
      { id: 2, title: "dua" },
    ];

    axios.get.mockImplementationOnce(() => {
      Promise.resolve({ data: { hits: story } });
    });
    render(<SearchScreen />);

    await act(async () => {
      await userEvent.click(screen.getByRole('button'));
    })
    // const items = await screen.findAllByRole('listitem');

    // expect(items).toHaveLength(2);

  });
})