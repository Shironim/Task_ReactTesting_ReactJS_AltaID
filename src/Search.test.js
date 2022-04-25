import { render, screen, fireEvent } from '@testing-library/react';

import SearchScreen from './screen/Search';

describe('SearchScreen', () => {
  test('renders SearchScreen Screen', () => {
    render(<SearchScreen />);
  });
})