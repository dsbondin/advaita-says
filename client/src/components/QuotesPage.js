import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import QuotesList from './QuotesList';
import QuoteCard from './QuoteCard';
import QuoteForm from './QuoteForm';
import { fetchAllQuotes } from '../actions/quotesActions';


class QuotesPage extends Component {

  componentDidMount() {
    debugger;
    this.props.fetchAllQuotes();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/quotes' component={QuotesList}/>
        <Route exact path='/quotes/my' component={QuotesList}/>
        <Route exact path='/quotes/random' component={QuoteCard}/>
        <Route exact path='/quotes/new' component={QuoteForm}/>
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, {fetchAllQuotes})(QuotesPage);
