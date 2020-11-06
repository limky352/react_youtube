import React, { Component } from 'react'
import Trend from '../page/Trend'
import Subs from '../page/Subs'
import Locker from '../page/Locker';
import Histor from '../page/Histor'

class NavRouter extends Component {
  render() {
    // console.log(this.props.match.params);
    if (this.props.match.params.name === 'trend')
      return (<Trend></Trend>)
    else if (this.props.match.params.name === "subs")
      return (<Subs></Subs>)
    else if (this.props.match.params.name === "locker")
      return (<Locker></Locker>)
    else if (this.props.match.params.name === "histor")
      return (<Histor></Histor>)
    else
      return (<div>페이지를 찾을 수 없습니다.</div>)
  }
}
export default NavRouter;

/* const NavRouter = ({match}) => {
  // switch(this.props.match.params.name){
  //   case Trend:
  //     return <Trend></Trend>
  // }
  console.log('NavRouter');
  if (this.props.match.params.name === Trend)
    return <Trend></Trend>
  else if (this.props.match.params.name === Subs)
    return <Subs></Subs>
  else if (this.props.match.params.name === Locker)
    return <Locker></Locker>
  else if (this.props.match.params.name === Histor)
    return <Histor></Histor>
  else
    return <div>페이지를 찾을 수 없습니다.'</div>
}
 */