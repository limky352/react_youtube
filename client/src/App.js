import React from 'react';
import './App.css';
import Home from './page/Home'
import Baseball from './page/Baseball.jsx'
import Header from './components/Header'
import Left_nav from './components/Left_nav'
// import HeaderT from './routeTest/HeaderT'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
// import { Router } from 'express';
import Subs from './page/Subs';
import Trend from './page/Trend';
import Locker from './page/Locker';
import Histor from './page/Histor';

class App extends React.Component {
  state = {
    isLogin: false,
  }

  render() {
    return (
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    );
  }
}

export default App;
