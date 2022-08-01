import {render, screen} from '@testing-library/react';

import NoteShare from './NoteShare';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate
}));

describe('Note share', () => {
  test('renders title', () => {
    render(<NoteShare/>);
    const linkElement = screen.getByText(/Share a note!/i);
    expect(linkElement).toBeInTheDocument();
  });
});
