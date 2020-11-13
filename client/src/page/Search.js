import React, { PureComponent } from 'react';
import './Search.css'


class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dbSearch: "",
      isReady: false
    }
    this.lists = [];
    this.urlSearchParams = "";
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        dbSearch: res,
        isReady: true
      }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch(`/result${this.props.location.search}`);
    const body = await response.json();
    // this.urlSearchParams = new URLSearchParams(this.prop.location.search.slice(1));
    // console.log(urlSearchParams.get('result'));
    return body;
  }

  componentDidUpdate() {

  }

  render() {
    // new URLSearchParams(this.prop.location.search.slice(1));
    // console.log(urlSearchParams.get('result'));
    let lists2 = [];
    if (this.state.isReady === true) {
      console.log(this.state.dbSearch)
      for (let i = 0; i < this.state.dbSearch.length; i++) {
        lists2.push(
          <div className="videoCon">
            <div className="left">
              <img src={this.state.dbSearch[i].videoURL} className="tV" alt="" />
            </div>
            <div className="right">
              <div className="vTitle">{this.state.dbSearch[i].title}</div>
              <div className="vInfo">{this.state.dbSearch[i].id} ..   조회수 {this.state.dbSearch[i].views}회 {this.state.dbSearch[i].created}</div>
              <div className="vDescription">{this.state.dbSearch[i].description}</div>
            </div>
          </div>
        )
        console.log('for  in ', lists2.length)
      }

      console.log('r  in ', lists2.length)
    }
    console.log('r   out ', lists2.length)

    return (
      <div className="search">
        {lists2[0] && lists2}
        {/* search article : {this.props.location.search} */}
        {/* {console.log('search article : ', this.props.location.search)} */}
        {/* {console.log('urlSearchParams : ', urlSearchParams)} */}

      </div>
    )
  }
}


export default Search;