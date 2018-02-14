import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchRandomQuote } from '../actions/quotesActions';
import { addQuoteToCollectionAPI } from '../actions/quotesActions';
import QuoteCard from './QuoteCard';

class RandomQuote extends Component {

  componentDidMount() {
    this.props.fetchRandomQuote();
  }

  addQuoteToCollection = (quoteId) => {
    const token = localStorage.getItem('token');
    this.props.addQuoteToCollectionAPI(quoteId, token);
  }

  render() {
    const { isLoading, randomQuote} = this.props;

    return(
      <div>
        <QuoteCard
          quote={randomQuote}
          isLoading={isLoading}
          addQuoteToCollection={this.addQuoteToCollection}
          fetchRandomQuote={this.props.fetchRandomQuote}
        />
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
    addQuoteToCollectionAPI: addQuoteToCollectionAPI
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
