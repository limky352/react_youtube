import React, { Component } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";


class Header extends Component {
  render() {
    return (
      <header className="header" >
        <div className="left">
          <div className="btn_hamburger_container">
            <GiHamburgerMenu className="btn_hamburger" />
          </div>
          <div className="logo">
            <FaYoutube className="logo_img" />
            <span className="logo_name">YouTube</span>
          </div>
        </div>
        <div className="center">
          <div className="search_container">
            <form action="">
              <input className="search_bar" type="search" placeholder="검색" />
            </form>
          </div>
        </div>
        <div className="right">

        </div>
      </header>
    )
  }
}

export default Header;