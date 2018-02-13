import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QuotesList from './QuotesList';
import QuoteCard from './QuoteCard';


class QuotesPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/quotes' component={QuotesList}/>
        <Route exact path='/quotes/random' component={QuoteCard}/>
      </Switch>
    )
  }
}

export default QuotesPage;
