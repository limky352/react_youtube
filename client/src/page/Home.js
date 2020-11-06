import React from 'react';
import Header from '../components/Header'
import Left_nav from '../components/Left_nav'

import './Home.css';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Main from './../container/Main';
import NavRouter from './../route/NavRouter';



const Home = () => {
  console.log('home');
  return (
    <>
      <Header></Header>
      <div className="section">
        <Left_nav></Left_nav>
        <div>
          <Switch>
            <Route exact path="/feed/:name" component={NavRouter} />
            <Route path="/" component={Main} />
            {/* {this.props.children} */}
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Home;