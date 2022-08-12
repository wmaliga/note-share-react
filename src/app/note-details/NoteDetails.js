import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import './NoteDetails.css';

const API = process.env.REACT_APP_API_URL;

function NoteDetails() {
  const [loading, setLoading] = useState(true);
  const [noteType, setNoteType] = useState(null);
  const [password, setPassword] = useState('');
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);
  const {id} = useParams();

  const validateResponse = response => {
    if (response.status !== 200) {
      switch (response.status) {
        case 401:
          throw new Error('Incorrect password');
        case 404:
          throw new Error('Note not found');
        case 410:
          throw new Error('Note has expired');
        default:
          throw new Error('Ups! Something gone wrong...');
      }
    }

    return response.json();
  };

  useEffect(() => {
    fetch(`${API}/notes/${id}/type`, {method: 'GET'})
      .then(validateResponse)
      .then(setNoteType)
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!noteType) return;
    if (noteType === 'PRIVATE' && !password) return;

    fetch(`${API}/notes/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': password
      }
    }).then(validateResponse)
      .then(note => {
        setNote(note);
        setError(null);
        setLoading(false);
      }).catch(setError);
  }, [id, noteType, password]);

  const submitPassword = e => {
    e.preventDefault();
    setPassword(e.target.elements.password.value);
  };

  let formElement = <div/>;
  let noteElement = <div/>;
  let errorElement = <div/>;
  let spinnerElement = <div/>;

  if (noteType === 'PRIVATE' && !note) {
    formElement = (
      <form onSubmit={submitPassword} className="pure-form pure-form-stacked">
        <label htmlFor="password">Password</label>
        <input id="password" type="text" className="pure-input-1" placeholder="Note is password protected"/>
        <input type="submit" value="Open" className="pure-button pure-button-primary"/>
      </form>
    );
  }

  if (note) {
    const expirationDate = note.expirationDate ? new Date(note.expirationDate).toISOString().slice(0, 10) : null;
    const expirationDateText = expirationDate ? ` expires after: ${expirationDate} ` : '';
    const tagColor = note.type === 'PRIVATE' ? 'tag-red' : 'tag-green'

    noteElement = (
      <div>
        <h2 className="note-title">{note.title}</h2>
        <p className="note-meta">Note #{note.id}
          <span>{expirationDateText}</span>
          <span className={`tag ${tagColor}`}>{note.type.toLowerCase()}</span>
        </p>
        <div className="note-data-container">{note.data}</div>
      </div>
    );
  }

  if (error) {
    errorElement = (
      <div className="error-container">{error.message}</div>
    );
  }

  if (loading) {
    spinnerElement = (
      <div className="align-center">
        <div id="loading"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="content-subhead">Note Details</h1>
      {formElement}
      {noteElement}
      {errorElement}
      {spinnerElement}
    </div>
  );
}

export default NoteDetails;
