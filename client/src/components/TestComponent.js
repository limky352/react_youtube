import React, { Component } from 'react';
import { BiHighlight, BiRadioCircleMarked } from 'react-icons/bi';

class TestComponent extends Component {
  state = { //
    brand: ['해태', '코카', '롯데'],
    article:
    {
      haetae: '썬키스트, 코코팜, 킨사이다',
      lott: '사이다, 트레비, 무언가',
      coca: '콜라, 스프라이트, 파워에이드'
    }
  }

  printBrand = (_brand) => {

    let res = '';
    if (_brand === 'haetae')
      res = this.state.article.haetae;
    else if (_brand === 'lott')
      res = this.state.article.lott;
    else
      res = this.state.article.coca;
    // for (let i = 0; i < this.state.브랜드.length; i++) {
    // alert(this.state.브랜드[0]);
    // console.log(`${this.state.본문[_brand]}`);
    return (res);
  }

  render() {
    // console.log(Object.keys(this.state.article[0]));
    // return (<div>{this.state.article.haetae}</div>);
    return (<div>{this.printBrand('coca1sdf')}</div>);
  }
}

export default TestComponent;