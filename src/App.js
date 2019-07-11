import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Home from './home';
import Database from './database';
import Glossary from './glossary';
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
        <Route exact={true} path = '/database' render={() => (
          <div className="App">
            <Database />
          </div>
        )} />
        <Route exact={true} path = '/glossary' render={() => (
          <div className="App">
            <Glossary />
          </div>
        )} />
      </div>
    </HashRouter>
  );
}

export default App;
