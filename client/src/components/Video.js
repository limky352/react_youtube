import React, { PureComponent } from 'react';
import './Video.css';



class Video extends PureComponent {
  render() {
    return (
      <div className="videoContainer">
        <div>
          <img src={this.props.URL} alt="" className="video1" />
        </div>

        <div className="videoInfoContainer">
          <div className="videoInfoLeft">
            <div >
              <img src={this.props.icon} alt="" className="icon" />
            </div>
          </div>
          <div className="videoInfoRight">
            <div className="videoInfoRightTop">
              <div>{this.props.title}</div>
            </div>
            <div className="videoInfoRightBottom">
              <div>{this.props.name}</div>
              <div className="videoInfoRightBottomTop">
                <div>{this.props.views}</div>
                <div>{this.props.created}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Video;