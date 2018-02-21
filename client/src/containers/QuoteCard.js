import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomQuote } from '../actions/quotesActions';

class QuoteCard extends Component {

  addQuote = (quoteId) => {
    this.props.addQuoteToCollection(quoteId);
  }

  fetchRandom = () => {
    this.props.fetchRandomQuote();
  }

  render() {
    const { quote, disabled, isLoading } = this.props
    const loadingRender = <div><img height="100px" alt="loading" src={require("../images/loading-gif.gif")}/></div>
    const quoteRender = (
      <div className="card" style={{backgroundColor: '#eee', padding: '12px', borderRadius: "8px"}}>
        <div className="card-block ">
          <p className="card-text" style={{fontStyle: "italic", fontSize: "15px", color: "#603"}}>{quote.content}</p>
          <button disabled={disabled}
            className="btn btn-primary"
            style={{margin: "8px", backgroundColor: "#669", borderColor: "#669"}}
            onClick={() => this.addQuote(quote.id)}>
            Add quote to my collection
          </button>

          <button
            className="btn btn-primary"
            style={{margin: "8px", backgroundColor: "#669", borderColor: "#669"}}
            onClick={() => this.fetchRandom()}>
            Next random quote
          </button>
        </div>
      </div>
    )

    return (
      <div>
        {isLoading ? loadingRender : quoteRender}
      </div>
    )
  }
}

export default connect(null, { fetchRandomQuote })(QuoteCard)
