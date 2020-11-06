import React, { PureComponent } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Login_btn from './Login_btn'
import { Link, Route, Switch } from "react-router-dom";
// import Home from '../page/Home';


class Header extends PureComponent {
  render() {
    console.log('Header');
    return (
      <header className="header" >
        {/* <p>Default:</p>
        <div class="w3-light-grey">
          <div class="w3-container w3-green">50%</div>
        </div> */}
        {/* 왼쪽 */}
        <div className="left">
          <div className="btn_hamburger_container">
            <GiHamburgerMenu className="btn_hamburger btn" />
          </div>
          <Link to="/" className="linkk">
            <div className="logo btn">
              <FaYoutube className="logo_img" />
              <span className="logo_name">YouTube</span>
            </div>
          </Link>
        </div>
        {/* 중앙 */}
        <div className="center">
          <div className="search_container">
            <form className="form_search" action="">
              <input className="search_bar" type="search" placeholder="검색" />
              <button className="search_btn btn" type="submit">
                <AiOutlineSearch className="search_img"></AiOutlineSearch>
              </button>
            </form>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="right">
          <div className="right_btns">
            {/* <RiVideoAddFill className="right_btns"></RiVideoAddFill> */}
            <div className="right_btn_container btn"><MdVideoCall className="right_btns"></MdVideoCall></div>
            <div className="right_btn_container btn"><MdApps className="right_btns"></MdApps></div>
            <div className="right_btn_container btn"><BiDotsVerticalRounded className="right_btns"></BiDotsVerticalRounded></div>
            <Login_btn></Login_btn>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;