// noinspection JSCheckFunctionSignatures

import {render, screen} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import NoteList from './NoteList';

const testNote = {
  id: 'noteId',
  title: 'noteTitle',
  expirationDate: '2030-01-01',
  type: 'PUBLIC'
};

let fetchBackup = undefined;

describe('Note list', () => {

  beforeEach(() => {
    fetchBackup = fetch;
  })

  afterEach(() => {
    fetch = fetchBackup;
  });

  test('renders title', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve([testNote])
      })
    );

    await act(async () => await render(<NoteList/>));

    const linkElement = screen.getByText(/Public Notes/);
    expect(linkElement).toBeInTheDocument();
  });

  test('loads elements', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve([testNote])
      })
    );

    await act(async () => await render(<NoteList/>));

    const id = screen.getByText(testNote.id, {exact: false});
    const title = screen.getByText(testNote.title, {exact: false});
    const expirationDate = screen.getByText(testNote.expirationDate, {exact: false});
    expect(id).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(expirationDate).toBeInTheDocument();
  });

  test('shows errors', async () => {
    fetch = jest.fn(() => Promise.resolve({
        status: 404,
        json: () => Promise.resolve([testNote])
      })
    );

    await act(async () => await render(<NoteList/>));

    const message = screen.getByText('Ups! Something gone wrong...');
    expect(message).toBeInTheDocument();
  });
});
