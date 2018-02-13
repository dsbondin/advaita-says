import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QuotesList from './QuotesList';
import QuoteCard from './QuoteCard';
import QuoteForm from './QuoteForm';


class QuotesPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/quotes' component={QuotesList}/>
        <Route exact path='/quotes/random' component={QuoteCard}/>
        <Route exact path='/quotes/new' component={QuoteForm}/>
      </Switch>
    )
  }
}

export default QuotesPage;
