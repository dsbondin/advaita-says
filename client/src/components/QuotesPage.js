import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import QuotesList from './QuotesList';
import QuoteCard from './QuoteCard';
import QuoteForm from './QuoteForm';
import { fetchAllQuotes } from '../actions/quotesActions';


class QuotesPage extends Component {

  componentDidMount() {
    this.props.fetchAllQuotes();
  }

  render() {
    const { isLoading, quotes } = this.props;

    return (
      <Switch>
        <Route exact path='/quotes' render={() => <QuotesList quotes={quotes} isLoading={isLoading}/>}/>
        <Route exact path='/quotes/my' component={QuotesList}/>
        <Route exact path='/quotes/random' component={QuoteCard}/>
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
  return bindActionCreators({fetchAllQuotes: fetchAllQuotes}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(QuotesPage);
