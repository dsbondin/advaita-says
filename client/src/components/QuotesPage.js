import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import QuotesList from './QuotesList';
import RandomQuote from './RandomQuote';
import QuoteForm from './QuoteForm';
import { fetchAllQuotes, fetchMyQuotes } from '../actions/quotesActions';


class QuotesPage extends Component {

  componentDidMount() {
    this.props.fetchAllQuotes();
    this.props.fetchMyQuotes();
  }

  render() {
    const { isLoading, quotes } = this.props;

    return (
      <Switch>
        <Route exact path='/quotes' render={() => <QuotesList quotes={quotes} isLoading={isLoading}/>}/>
        <Route exact path='/quotes/my' render={() => <QuotesList quotes={myQuotes} isLoading={isLoading}/>}/>
        <Route exact path='/quotes/random' component={RandomQuote}/>
        <Route exact path='/quotes/new' component={QuoteForm}/>
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.quotes.isLoading,
    quotes: state.quotes.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAllQuotes: fetchAllQuotes,
    fetchMyQuotes: fetchMyQuotes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);
