import {render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import NoteDetails from './NoteDetails';

const testNote = {
  id: 'noteId',
  title: 'noteTitle',
  expirationDate: '2030-01-01',
  type: 'PUBLIC'
};

let fetchBackup = undefined;

describe('Note details', () => {

  beforeEach(() => {
    fetchBackup = fetch;
  });

  afterEach(() => {
    fetch = fetchBackup;
  });

  test('renders title', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(testNote)
      })
    );

    await act(async () => await render(<NoteDetails/>));

    const linkElement = screen.getByText(/Note Details/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('loads details', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(testNote)
      })
    );

    await act(async () => await render(<NoteDetails/>));

    const id = screen.getByText(testNote.id, {exact: false});
    const type = screen.getByText(testNote.type, {exact: false});
    const title = screen.getByText(testNote.title, {exact: false});
    const expirationDate = screen.getByText(testNote.expirationDate, {exact: false});
    expect(id).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
  });

  test('shows errors', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 404,
        json: () => Promise.resolve(testNote)
      })
    );

    await act(async () => await render(<NoteDetails/>));

    const message = screen.getByText('Note not found');
    expect(message).toBeInTheDocument();
  });
});
