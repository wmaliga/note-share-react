import React from "react";
import {useParams} from "react-router-dom";

import './NoteDetails.css';

function NoteDetails() {
  const {id} = useParams();

  return (
    <div>
      <h1 className="content-subhead">Note Details</h1>
      <div>
        <h2 className="note-title">Test note 1</h2>
        <p className="note-meta">Note #{id}
          <span> expires after: 2022-12-12 </span>
          <span className="tag tag-green">Public</span>
        </p>
        <div className="note-data-container">This is the public note!</div>
      </div>
    </div>
  );
}

export default NoteDetails;
