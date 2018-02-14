import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchRandomQuote } from '../actions/quotesActions';
import { addQuoteToAPI } from '../actions/quotesActions';
import QuoteCard from './QuoteCard';

class RandomQuote extends Component {

  componentDidMount() {
    this.props.fetchRandomQuote();
  }

  addQuoteToCollection = (quoteId) => {
    this.props.addQuoteToAPI(quoteId);
  }

  render() {
    const { isLoading, randomQuote} = this.props;

    return(
      <div>
        <QuoteCard quote={randomQuote} isLoading={isLoading} addQuoteToCollection={this.addQuoteToCollection}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (state.quotes.randomQuote) {
    return {
      isLoading: state.quotes.isLoading,
      randomQuote: state.quotes.randomQuote
    }
  } else {
    return {
      isLoading: state.quotes.isLoading,
      randomQuote: ''
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRandomQuote: fetchRandomQuote,
    addQuoteToAPI: addQuoteToAPI
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
