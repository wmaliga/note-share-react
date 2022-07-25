import React from "react";

import './NoteList.css';

function NoteList() {
  return (
    <div>
      <h1 className="content-subhead">Public Notes</h1>

      <section className="note-container">
        <h2 className="note-title">Test note 1</h2>
        <p className="note-meta">Note #xxx-xxx-xxx
          <span> expires after: 2022-12-12 </span>
          <span className="tag tag-green">Public</span>
        </p>
      </section>

      <section className="note-container">
        <h2 className="note-title">Test note 2</h2>
        <p className="note-meta">Note #xxx-xxx-xxx
          <span> expires after: 2022-12-12 </span>
          <span className="tag tag-red">Private</span>
        </p>
      </section>

      <section className="note-container">
        <h2 className="note-title">Test note 3</h2>
        <p className="note-meta">Note #xxx-xxx-xxx
          <span> expires after: 2022-12-12 </span>
          <span className="tag tag-green">Public</span>
        </p>
      </section>
    </div>
  );
}

export default NoteList;
