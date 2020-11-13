import React, { PureComponent } from 'react';
import { FiMusic } from "react-icons/fi";
import { CgGames } from "react-icons/cg";
import { BiMovie } from "react-icons/bi";
import './Trend.css'


class Trend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dbTrend: "",
      isReady: false
    }
    this.lists = [];
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        dbTrend: res,
        isReady: true
      }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/trend');
    const body = await response.json();
    return body;
  }

  componentDidUpdate() {

  }

  render() {
    let lists2 = [];
    if (this.state.isReady === true) {
      console.log(this.state.dbTrend)
      for (let i = 0; i < this.state.dbTrend.length; i++) {
        lists2.push(
          <div className="videoCon">
            <div className="left">
              <img src={this.state.dbTrend[i].videoURL} className="tV" alt="" />
            </div>
            <div className="right">
              <div className="vTitle">{this.state.dbTrend[i].title}</div>
              <div className="vInfo">{this.state.dbTrend[i].id} ..   <span className="views">조회수 {this.state.dbTrend[i].views}회</span> {this.state.dbTrend[i].created}</div>
              <div className="vDescription">{this.state.dbTrend[i].description}</div>
            </div>
          </div>
        )
        console.log('for  in ', lists2.length)
      }
      // for (const ob of this.state.dbTrend) {
      //   lists2.push(
      //     // <div className="videoCon">
      //     //   <div className="left">
      //     //     <img src={ob.videoURL} className="tV" alt="" />
      //     //   </div>
      //     //   <div className="right">
      //     //     <div className="vTitle">{ob.title}</div>
      //     //     <div className="vInfo">{ob.id} {ob.views} {ob.created}</div>
      //     //     <div className="vDescription">{ob.description}</div>
      //     //   </div>
      //     // </div>
      //   );
      // }
      // lists2 = this.state.dbTrend.map((v) => (
      //   <div className="videoCon">
      //     <div className="left">
      //       <img src={v.videoURL} className="tV" alt="" />
      //     </div>
      //     <div className="right">
      //       <div className="vTitle">{v.title}</div>
      //       <div className="vInfo">{v.id} {v.views} {v.created}</div>
      //       <div className="vDescription">{v.description}</div>
      //     </div>
      //   </div>
      // )
      // )
      console.log('r  in ', lists2.length)
    }
    console.log('r   out ', lists2.length)
    // for (let i = 0; i < VDC; i++) {
    //   this.lists.push(
    //   )
    return (
      <div className="trend">
        <ul className="iconContainer">
          <div className="tCIcCon">
            <li><FiMusic className="iconInTrend"></FiMusic></li>
            <span className="tCartegory">음악</span>
          </div>
          <div className="tCIcCon">
            <li><CgGames className="iconInTrend"></CgGames></li>
            <span className="tCartegory">게임</span>
          </div>
          <div className="tCIcCon">
            <li><BiMovie className="iconInTrend"></BiMovie></li>
            <span className="tCartegory">영화</span>
          </div>
        </ul>
        {/* `${this.state.dbUser}` */}

        {lists2[0] && lists2}
        {this.lists && console.log(this.lists)}
        {/* <div className="videoCon">
          <div className="left">
            <img src="http://placeimg.com/250/150/adsffggan" className="tV" alt="" />
          </div>
          <div className="right">
            <div className="vTitle">제목</div>
            <div className="vInfo">유저 views created</div>
            <div className="vDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odit pariatur deleniti, quos esse voluptas non iure quam labore similique ipsum cum, quod, possimus quo in incidunt? Blanditiis, quis repellat.</div>
          </div>
        </div> */}
      </div>
    )
  }
}
// {
//   "id": "lim2",
//   "title": "lim2-video1",
//   "description": "재미있는 리액트",
//   "views": 787,
//   "videoURL": "http://placeimg.com/250/150/adsffggan",
//   "created": "2020-11-07T01:05:09.000Z",
//   "picture": null
// },


export default Trend;