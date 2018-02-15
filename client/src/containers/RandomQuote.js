import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchRandomQuote } from '../actions/quotesActions';
import { addQuoteToCollectionAPI } from '../actions/quotesActions';
import QuoteCard from './QuoteCard';
import FlashMessage from '../components/FlashMessage';

class RandomQuote extends Component {

  componentDidMount() {
    this.props.fetchRandomQuote();
  }

  addQuoteToCollection = (quoteId) => {
    const token = localStorage.getItem('token');
    this.props.addQuoteToCollectionAPI(quoteId, token);
  }

  render() {
    const { isLoading, randomQuote, message, fetchRandomQuote } = this.props;

    return(
      <div style={{margin: "20px"}}>
        <QuoteCard
          quote={randomQuote}
          isLoading={isLoading}
          addQuoteToCollection={this.addQuoteToCollection}
          fetchRandomQuote={fetchRandomQuote}
          disabled={!!message}
        />
        {!!message ? <FlashMessage message={message}/> : ''}
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!!state.quotes.randomQuote) {
    return {
      isLoading: state.quotes.isLoading,
      randomQuote: state.quotes.randomQuote,
      message: state.quotes.message
    }
  } else {
    return {
      isLoading: state.quotes.isLoading,
      randomQuote: '',
      message: { type: null, text: null }
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
