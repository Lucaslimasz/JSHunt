import React, { Component } from 'react';

import Header from './components/header/index';
import Main from './pages/main';

import Routes from './routes';

function App() {
  return (
    <div>
      <Header/>
      <Routes />
    </div>
  );
}

export default App;
