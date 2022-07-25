import React from "react";

import './NoteLink.css';

function NoteLink() {
  return (
    <div>
      <h1 className="content-subhead">Note shared</h1>
      <p className="link-label">Link to your note is:</p>
      <div className="link-container align-center">
        <h1>http://localhost/note/xxx-xxx-xxx-xxx</h1>
      </div>
    </div>
  );
}

export default NoteLink;
