import {render, screen} from '@testing-library/react';

import NoteLink from './NoteLink';

test('renders note link', () => {
  render(<NoteLink/>);
  const linkElement = screen.getByText(/Note shared/i);
  expect(linkElement).toBeInTheDocument();
});
