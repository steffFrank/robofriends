import React, { Component } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  onSearchField = event => {
    this.setState({searchField: event.target.value});
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }
  
  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      (!robots.length) ? <h1>Loading!!!</h1> : 
      <>
        <Header onSearchField = {this.onSearchField}/>
        <Scroll>
        	<Cards robots={filteredRobots}/>
        </Scroll>
      </>
      )
  }
}

export default App;