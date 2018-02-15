import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { removeQuoteFromCollectionAPI } from '../actions/quotesActions';
import Quote from './Quote';

class QuotesList extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.fetchMyQuotes(token)
  }

  removeQuote = (quoteId) => {
    const token = localStorage.getItem('token')
    this.props.removeQuoteFromCollectionAPI(quoteId, token)
  }

  render() {
    const { quotes, isLoading } = this.props

    const renderLoading = (
      <div>
        <img
          alt="loading"
          height="100px"
          src={require("../images/loading-gif.gif")}/>
      </div>
    )

    let renderQuotes = <div style={{margin: "20px"}}>Your collection is empty. Click 'Random' to see if you like any.</div>

    if (quotes.length > 0) {
      renderQuotes = quotes.map((quote, index) => {
        return <Quote quote={quote} key={index} removeQuote={this.removeQuote}/>
      })
    }


    return (
      <div>
        { isLoading ? renderLoading : renderQuotes }
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
