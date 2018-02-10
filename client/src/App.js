import React, { Component } from 'react';
import './App.css';
import fetch from 'isomorphic-fetch'


class App extends Component {

  componentDidMount() {
    fetch("http://localhost:3001/login", {
      method: "post",
      body: JSON.stringify({username: "Denis", password: "123"}),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
