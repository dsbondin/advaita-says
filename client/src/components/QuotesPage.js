import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import QuotesList from './QuotesList';
import RandomQuote from './RandomQuote';
import QuoteForm from './QuoteForm';
import { fetchMyQuotes } from '../actions/quotesActions';


class QuotesPage extends Component {

  render() {
    const { isLoading, quotes } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path='/quotes/my' render={() => <QuotesList quotes={quotes} isLoading={isLoading} fetchMyQuotes={this.props.fetchMyQuotes}/>}/>
          <Route exact path='/quotes/random' component={RandomQuote}/>
          <Route exact path='/quotes/new' component={QuoteForm}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!!state.quotes.list) {
    return {
      isLoading: state.quotes.isLoading,
      quotes: state.quotes.list,
    }
  } else {
    return {
      isLoading: state.quotes.isLoading,
      quotes: [{content: ''}],
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMyQuotes: fetchMyQuotes
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);
