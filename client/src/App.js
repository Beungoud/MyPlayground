import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'leaflet/dist/leaflet.css';

import Header from  "./Page/Header"
import Main from  "./Page/Main"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
