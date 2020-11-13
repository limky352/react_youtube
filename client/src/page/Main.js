import React, { PureComponent } from 'react';
import Video from '../components/Video';
import './Main.css';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      videoDrawCount: 8,
      dbVideos: ""
    }
    this.lists = [];
    this.scrSize = [
      { minX: 0, maxX: 500, drawCount: 2 },
      { minX: 501, maxX: 890, drawCount: 4 },
      { minX: 891, maxX: 1140, drawCount: 6 },
      { minX: 1141, maxX: window.screen.width, drawCount: 8 }];
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ dbVideos: res })
      })
      .then(res => this.setReady())
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/main');
    const body = await response.json();
    return body; //async는 리턴값이 promise라서 .then이 사용 가능
  }

  setReady = () => { this.setState({ isReady: true }) }

  getSnapshotBeforeUpdate() {

    window.addEventListener('resize', () => {
      let curDC;
      for (let i = 0; i < this.scrSize.length; i++) {
        if (this.scrSize[i].minX < window.innerWidth &&
          window.innerWidth < this.scrSize[i].maxX) {
          curDC = this.scrSize[i].drawCount;
          // console.log(curDC);
          break;
        }
      }
      if (curDC !== this.state.videoDrawCount) {
        this.setState({ videoDrawCount: curDC });
        // console.log(this.state.videoDrawCount);
      }
    })
  }

  componentDidUpdate() {

  }

  render() {
    //componentDidMount에서 비동기 작업이 끝나면 실행
    console.log('렌더 시작 : ', this.lists.length);
    if (this.state.isReady === true
      && this.lists.length !== this.state.videoDrawCount) {
      console.log('길이 초기화 전 : ', this.lists.length);
      this.lists = [];
      console.log('길이 초기화 후 : ', this.lists.length);
      let VDC = ( // 화면에 그려줘야 될 비디오 갯수
        this.state.videoDrawCount < this.state.dbVideos.length
          ? this.state.videoDrawCount
          : this.state.dbVideos.length)
      for (let i = 0; i < VDC; i++) {
        this.lists.push(
          <Video //key={VDC}
            URL={this.state.dbVideos[i].videoURL}
            icon={this.state.dbVideos[i].picture}
            title={this.state.dbVideos[i].title}
            name={this.state.dbVideos[i].id}
            views={this.state.dbVideos[i].views}
            created={this.state.dbVideos[i].created}
          >
          </Video>
        )
        // console.log(`vdc  ${VDC}`);
        // console.log(this.lists[i]);
      }
      console.log('삽입 후 : ', this.lists.length);

    }


    return (
      <div className="Main">
        <div className="videosC">
          {console.log('리턴 : ', this.lists.length)}
          {this.lists}
        </div>
      </div>
    )
  }
}

export default Main;