import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { removeQuoteFromCollectionAPI } from '../actions/quotesActions';
import Quote from './Quote';

class QuotesList extends Component {

  removeQuote = (quoteId) => {
    const token = localStorage.getItem('token')
    this.props.removeQuoteFromCollectionAPI(quoteId, token)
  }

  render() {
    const renderLoading = (
      <div>
        <img
          alt="loading"
          height="100px"
          src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif"/>
      </div>
    )

    const renderQuotes = this.props.quotes.map((quote, index) => {
      return <Quote quote={quote} index={index} removeQuote={this.removeQuote}/>
    })

    return (
      <div>
        { this.props.isLoading ? renderLoading : renderQuotes }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeQuoteFromCollectionAPI: removeQuoteFromCollectionAPI
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(QuotesList);
