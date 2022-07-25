import React from "react";

import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';

import './App.css';

import NoteList from './note-list/NoteList';

function App() {
  return (
    <div id="layout" className="pure-g">
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="pure-menu custom-restricted-width">
            <span className="pure-menu-heading">
              <img className="logo" src={process.env.PUBLIC_URL + "logo192.png"} alt="logo"/> NoteShare React
            </span>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="/share" className="pure-menu-link">Share a note!</a>
            </li>
            <li className="pure-menu-item">
              <a href="/" className="pure-menu-link">Public Notes</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content pure-u-1 pure-u-md-1-2">
        <NoteList/>
      </div>
    </div>
  );
}

export default App;
