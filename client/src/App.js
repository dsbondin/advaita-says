import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  render() {
    console.log("App's props: ", this.props)
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/login" component={LoginPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
