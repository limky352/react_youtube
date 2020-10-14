import React, { Component } from 'react';
import './Header.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdApps } from "react-icons/md";
import { MdVideoCall } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Login_btn from './Login_btn'


class Header extends Component {
  render() {
    return (
      <header className="header" >
        {/* 왼쪽 */}
        <div className="left">
          <div className="btn_hamburger_container">
            <GiHamburgerMenu className="btn_hamburger btn" />
          </div>
          <div className="logo btn">
            <FaYoutube className="logo_img" />
            <span className="logo_name">YouTube</span>
          </div>
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