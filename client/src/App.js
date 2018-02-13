import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUpPage from './components/SignUpPage';
import LogInPage from './components/LogInPage';
import Home from './components/Home';
import QuotesPage from './components/QuotesPage';



class App extends Component {

  render() {
    console.log("App's props: ", this.props)
    return (
      <Router>
        <div className="container" style={{maxWidth: "960px"}}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/login" component={LogInPage}/>
            <Route path="/quotes" component={QuotesPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
