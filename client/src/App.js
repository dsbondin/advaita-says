import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar';
import SignUpPage from './containers/SignUpPage';
import LogInPage from './containers/LogInPage';
import Home from './components/Home';
import QuotesPage from './containers/QuotesPage';


class App extends Component {

  render() {
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
