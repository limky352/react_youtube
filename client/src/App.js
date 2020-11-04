import React from 'react';
import './App.css';
import Home from './page/Home'
import Baseball from './page/Baseball.jsx'
import Header from './components/Header'
import Left_nav from './components/Left_nav'
// import HeaderT from './routeTest/HeaderT'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './container/Main';
import Viewer from './container/Viewer';
import WebtoonHome from './container/WebtoonHome';
// import { Router } from 'express';

class App extends React.Component {
  state = {
    isLogin: false,

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Home></Home>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/feed/:trend" component={Viewer} />
            <Route path="/feed/:subs" component={Viewer} />
            <Route path="/feed/:locker" component={WebtoonHome} />
            <Route path="/feed/:history" component={Viewer} />
            {/* <Route path="/feed/:baseball" component={Baseball} /> */}
            {/* <Home></Home> */}
            {/* <HeaderT></HeaderT> */}
            {/* {this.props.children} */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
