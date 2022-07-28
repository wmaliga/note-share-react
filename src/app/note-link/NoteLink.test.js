// noinspection JSCheckFunctionSignatures

import {render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import NoteLink from './NoteLink';

describe('Note link', () => {
  test('renders title', () => {
    render(<NoteLink/>);

    const title = screen.getByText(/Note shared/i);
    expect(title).toBeInTheDocument();
  });

  test('shows link', async () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: jest.fn().mockReturnValue({id: 'noteId'}),
    }));

    await act(async () => await render(<NoteLink/>));

    const link = screen.getByText('http://localhost/note/');
    expect(link).toBeInTheDocument();
  });
});