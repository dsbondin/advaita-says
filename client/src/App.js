import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import fetch from 'isomorphic-fetch';
import NavBar from './components/NavBar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';



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
      <Router>
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignupForm} userSignUpRequest={userSignUpRequest}/>
          <Route exact path="/login" component={LoginForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
