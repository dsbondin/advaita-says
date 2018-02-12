import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import Home from './components/Home';



class App extends Component {

  render() {
    console.log("App's props: ", this.props)
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/login" component={LogInPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
