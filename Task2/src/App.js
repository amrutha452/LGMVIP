import Users from "./folder/card";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });
    

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
     2000
    );
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navdata">
            <h1>ReactApp</h1>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
<div class="home" >
      <img height={500} width={500}src="https://th.bing.com/th/id/OIP.h4k7SuZjs53BA04VwoLSqAHaHO?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="welcome"/>
      <h1> USERS PROFILE</h1>
      </div>
      </>
    );
  }
}

export default App;