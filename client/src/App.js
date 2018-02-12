import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import NavBar from './components/NavBar';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';



class App extends Component {

  // componentDidMount() {
  //   fetch("http://localhost:3001/login", {
  //     method: "post",
  //     body: JSON.stringify({username: "Denis", password: "123"}),
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //     })
  // }

  componentDidMount() {
    console.log("componentDidMount props: ", this.props)
  }

  render() {
    console.log("App's props: ", this.props)
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" render={() => <SignupPage isLoading={this.props.isLoading} errors={this.props.errors}/>}/>
          <Route exact path="/login" component={LoginPage}/>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log("store's state: ", state)
  return {
    user: state.user,
    token: state.token,
    isLoading: state.auth.isLoading,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps)(App);
