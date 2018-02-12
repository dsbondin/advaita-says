import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUpUser } from './actions/signUp';
import NavBar from './components/NavBar';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
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
          <Route exact path="/signup" render={() => <SignupPage signUpUser={this.props.signUpUser}/>}/>
          <Route exact path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}

export default connect(null, {signUpUser})(App);
