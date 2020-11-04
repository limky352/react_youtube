import React, { Component } from 'react';

import Header2 from "../components/Header2";
import Gnb from "../components/Gnb";
import Footer from "../components/Footer";
import WebtoonList from "../components/WebtoonList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 'mon', //디폴트로 월요일
      webtoonList: []
    };
  }
  render() {
    return (
      <div>
        <Header2 />
        <Gnb />

        { this.state.webtoonList.length > 0 ?
          (<WebtoonList list={this.state.webtoonList.filter(webtoon =>
            (webtoon.day === this.state.day))} />) :
          (<span>LOADING...</span>)
        }
        <Footer />
      </div>
    )
  }
} export default Main;
