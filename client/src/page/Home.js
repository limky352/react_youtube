import React from 'react';
import Header from '../components/Header'
import Left_nav from '../components/Left_nav'

import './Home.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import NavRouter from './../route/NavRouter';
import Main from './Main';
import Search from './Search';



const Home = () => {
  console.log('home');
  return (
    <div className="Home">
      <Header className="header"></Header>
      <div className="container">
        <div className="leftNav">
          <Left_nav></Left_nav>
        </div>
        <div className="article">
          <Switch>
            <Route exact path="/result" component={Search} />
            <Route exact path="/feed/:name" component={NavRouter} />
            <Route path="/" component={Main} />

            {/* {this.props.children} */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;