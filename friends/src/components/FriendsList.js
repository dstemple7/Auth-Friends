import React from "react";
import Loader from "react-loader-spinner";
import moment from 'moment'

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        this.setState({ friendsList: res.data });
      })
      .catch(err => console.log(err));
  };

  formatData = () => {
    const formattedData = []
    this.state.friendsList.forEach((friend)=> {
      formattedData.push({
        name: friend.name
      })
    })
    return formattedData
  }

  render() {
    const friendsList = this.formatData();
    return (
      <div className="friends-list">
         {this.props.fetchingData && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {friendsList.length > 0 && (
          <div>{friendsList.name}</div>
        )}
      </div>
    );
  }
}

export default FriendsList;
