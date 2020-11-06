import React, { PureComponent } from 'react';
import './Left_nav.css'
import { IoMdHome } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import Login_btn from './Login_btn'
import { BsListNested } from 'react-icons/bs';

import { Link, Route, Switch } from "react-router-dom";
import Trend from '../page/Trend';
// import Login_btn from '../components/Login_btn';


class Left_nav extends PureComponent {
  render() {
    return (
      <nav className="navv">
        <div className="nav_section">
          {/* <Create_menu icon="IoMdHome" icon_name="HI"></Create_menu> */}
          <Link to="/" className="linkk" /* style={{ textDecoration: 'none' }} */>
            <div className="each_menu_container">
              <IoMdHome className="each_menu_img"></IoMdHome>
              <span className="each_menu_text">홈</span>
            </div>
          </Link>

          <Link to="/feed/trend" className="linkk">
            {/* <MenuItem component={Link} to={'/first'}>Team 1</MenuItem> */}
            <div className="each_menu_container">
              <FaFireAlt className="each_menu_img"></FaFireAlt>
              <span className="each_menu_text">인기</span>
            </div>
          </Link>

          <Link to="/feed/subs" className="linkk">
            <div className="each_menu_container">
              <MdSubscriptions className="each_menu_img"></MdSubscriptions>
              <span className="each_menu_text">구독</span>
            </div>
          </Link>
        </div> {/* /nav_section */}


        <div className="nav_section">
          <Link to="/feed/locker" className="linkk">
            <div className="each_menu_container">
              <AiFillFolderOpen className="each_menu_img"></AiFillFolderOpen>
              <span className="each_menu_text">보관함</span>
            </div>
          </Link>

          <Link to="/feed/histor" className="linkk">
            <div className="each_menu_container">
              <MdHistory className="each_menu_img"></MdHistory>
              <span className="each_menu_text">시청 기록</span>
            </div>
          </Link>
        </div>{/* /nav_section */}


        <div className="nav_section login_section">
          <div className="login_article">
            로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
          </div>
          <Login_btn></Login_btn>
        </div>
        {/* <Route path="/trend/:trendQuery" component={Trend} />
        <Route path="/subs/:subsQuery" component={Login_btn} /> */}
      </nav>
    )
  }
}

export default Left_nav;


/* class Create_menu extends Component {
  constructor(props){
    super(props);
    this.state={
      icons:[
        {id:1, icon:'IoMdHome', icon_name:'HI'},
        {id:2, icon:'IoMdHome', icon_name:'HIHello'}
      ]
    }
  }
  render() {
    var iicon = <div className="each_menu_container">
    <{this.props.icon} key={this.props.icon.id} className="each_menu_img"></{this.props.icon}>
    <span className="each_menu_text">{this.props.icon_name}</span>

  </div>
    return (
    )
  };
}
 */