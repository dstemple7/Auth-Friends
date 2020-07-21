import React from "react";

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
        name: friend.name,
        age: friend.age,
        email: friend.email
      })
    })
    return formattedData
  }

  render() {
    const friendsList = this.formatData();
    return (
      <div className="friends-list">
        <h1>My Hommies!</h1>
        {friendsList.map(friend => (
          <p>{friend.name}, {friend.age}, {friend.email}</p>
        ))}
      </div>
    );
  }
}

export default FriendsList;
