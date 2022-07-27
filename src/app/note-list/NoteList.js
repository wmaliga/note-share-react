import React, {useEffect, useState} from 'react';

import './NoteList.css';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/notes', {method: 'GET'})
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Ups! Something gone wrong...')
        }
        return response.json();
      }).then(setNotes)
      .catch(setError);
  }, []);

  let errorElement = <div/>;
  let spinnerElement = <div/>;

  const sections = notes.map(note => {
    const expirationDate = new Date(note.expirationDate).toISOString().slice(0, 10);
    const tagColor = note.type === 'PRIVATE' ? 'tag-red' : 'tag-green'

    return (
      <section key={note.id} className="note-container">
        <h2 className="note-title"><a href={`/note/${note.id}`}>{note.title}</a></h2>
        <p className="note-meta">Note #{note.id}
          <span> expires after: {expirationDate} </span>
          <span className={`tag ${tagColor}`}>{note.type.toLowerCase()}</span>
        </p>
      </section>
    );
  });

  if (error) {
    errorElement = (
      <div className="error-container">{error.message}</div>
    );
  }

  if (!notes && !error) {
    spinnerElement = (
      <div className="align-center">
        <div id="loading"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="content-subhead">Public Notes</h1>
      {sections}
      {errorElement}
      {spinnerElement}
    </div>
  );
}

export default NoteList;
