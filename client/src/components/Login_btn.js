import React, { Component } from 'react';
import { BsPersonFill } from "react-icons/bs";
import './Login_btn.css'

class Login_btn extends Component {

  render() {
    return (
      <div className="login_container">
        <BsPersonFill className="login_img"></BsPersonFill>
        <span className="login_text">로그인</span>
      </div>
    )
  }
}

export default Login_btn;