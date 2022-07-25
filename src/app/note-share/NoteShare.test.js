import {render, screen} from '@testing-library/react';

import NoteShare from './NoteShare';

test('renders share form', () => {
  render(<NoteShare/>);
  const linkElement = screen.getByText(/Share a note!/i);
  expect(linkElement).toBeInTheDocument();
});
