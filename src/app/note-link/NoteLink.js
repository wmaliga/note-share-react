import React from 'react';
import {useParams} from 'react-router-dom';

import './NoteLink.css';

function NoteLink() {
  const {id} = useParams();

  return (
    <div>
      <h1 className="content-subhead">Note shared</h1>
      <p className="link-label">Link to your note is:</p>
      <div className="link-container align-center">
        <h1>http://{window.location.host}/note/{id}</h1>
      </div>
    </div>
  );
}

export default NoteLink;
