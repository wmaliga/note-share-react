import {render, screen} from '@testing-library/react';

import App from './App';

test('renders main app', () => {
  render(<App/>);
  const linkElement = screen.getByText(/NoteShare React/i);
  expect(linkElement).toBeInTheDocument();
});
