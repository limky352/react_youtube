import React from 'react';
import './App.css';
import Header from './components/Header'
import Left_nav from './components/Left_nav'

function App() {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Left_nav></Left_nav>
    </div>
  );
}

export default App;
