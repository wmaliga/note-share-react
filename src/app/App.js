import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';

import './App.css';

import NoteList from './note-list/NoteList';
import NoteDetails from './note-details/NoteDetails';
import NoteShare from './note-share/NoteShare';
import NoteLink from './note-link/NoteLink';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NoteList/>}/>
            <Route path="/note/:id" element={<NoteDetails/>}/>
            <Route path="/share" element={<NoteShare/>}/>
            <Route path="/share/link/:id" element={<NoteLink/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
