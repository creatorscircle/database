import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact={true} path ='/' render={() => (
          <div className="App">
          <Home />
          </div>
        )} />
      </div>
    </HashRouter>
  );
}

export default App;
