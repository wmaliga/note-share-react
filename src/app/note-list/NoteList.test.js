import {render, screen} from '@testing-library/react';

import NoteList from './NoteList';

test('renders note list', () => {
  render(<NoteList/>);
  const linkElement = screen.getByText(/Public Notes/i);
  expect(linkElement).toBeInTheDocument();
});
