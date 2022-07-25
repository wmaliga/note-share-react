import {render, screen} from '@testing-library/react';

import NoteDetails from './NoteDetails';

test('renders note details', () => {
  render(<NoteDetails/>);
  const linkElement = screen.getByText(/Note Details/i);
  expect(linkElement).toBeInTheDocument();
});
