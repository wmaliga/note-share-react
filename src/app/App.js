import React from "react";

import 'purecss/build/pure.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div id="layout" class="pure-g">
        <div class="sidebar pure-u-1 pure-u-md-1-4">
          <div class="pure-menu custom-restricted-width">
            <span class="pure-menu-heading">NoteShare</span>
            <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="/share" class="pure-menu-link">Share a note!</a>
              </li>
              <li class="pure-menu-item">
                <a href="/" class="pure-menu-link">Public Notes</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="content pure-u-1 pure-u-md-1-2">
          {/*<router-outlet></router-outlet>*/}
        </div>
      </div>
    );
  }
}

export default App;
