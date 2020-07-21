import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: "lambda",
        password: "asdf"
      })
      .then(res => {
        // res.data.payload ==> localStorage
        // navigate user to the "protected" route
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>Username</label>
          &nbsp;
          <input
            type="text"
            name="username"
            placeholder="Ross? JK JK JK"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          &nbsp;
          <input
            type="password"
            name="password"
            placeholder="Make it Special"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br/>
          &nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp; 	&nbsp;	&nbsp; 	&nbsp; 	&nbsp;
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
