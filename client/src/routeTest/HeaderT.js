import React from 'react';
import './HeaderT.css';
import { Link, Route, Switch } from "react-router-dom";
// import Home from "./Home"
import About from "./About"

const MenuItem = ({ active, children, to }) => (
  <div className="menu-item">
    {children}
  </div>
)

const HeaderT = () => {
  return (
    <div>
      <div className="logo">
        velopert
      </div>
      <div className="menu">
        <Link to="/Home"><MenuItem>홈</MenuItem></Link>
        <Link to="/About"><MenuItem>소개</MenuItem></Link>
        <MenuItem>포스트</MenuItem>
      </div>
      {/* <Route path="/Home"><Home /></Route> */}
      <Route path="/About"><About /></Route>
    </div>
  );
};

export default HeaderT;