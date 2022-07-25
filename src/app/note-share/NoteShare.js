import React from "react";

import './NoteShare.css';

function NoteShare() {
  return (
    <div>
      <h1 className="content-subhead">Share a note!</h1>
      <form className="pure-form pure-form-stacked">
        <div className="pure-u-1 pure-u-md-1-5">
          <fieldset>
            <label htmlFor="radio-private" className="pure-radio">
              <input type="radio" id="radio-private" value="PRIVATE"/> Private note
            </label>
            <label htmlFor="radio-private" className="pure-radio">
              <input type="radio" id="radio-public" value="PUBLIC"/> Public note
            </label>
          </fieldset>
        </div>
        <div className="pure-u-1 pure-u-md-4-5">
          <label htmlFor="password">Password</label>
          <input type="password" className="pure-input-1" id="password"/>
        </div>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" className="pure-input-1" id="title" placeholder="Insert title of a note"/>
        </fieldset>
        <fieldset>
          <label htmlFor="expirationDate">Expiration date</label>
          <input type="text" className="pure-input-1" id="expirationDate" placeholder="YYYY-MM-DD"/>
        </fieldset>
        <fieldset>
          <label htmlFor="data">Note</label>
          <textarea className="pure-input-1" id="data" placeholder="Your note here"
                    rows="20"></textarea>
        </fieldset>
        <button className="pure-button pure-button-primary">Share!</button>
        <button className="pure-button align-right">Clear</button>
      </form>
    </div>
  );
}

export default NoteShare;
