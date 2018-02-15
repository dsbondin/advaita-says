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
    const loadingRender = <div><img height="100px" alt="loading" src={require("../images/loading-gif.gif")}/></div>
    const quoteRender = (
      <div className="card" style={{backgroundColor: '#eee', padding: '12px', borderRadius: "8px"}}>
        <div className="card-block ">
          <p className="card-text">{this.props.quote.content}</p>
          <button disabled={this.props.disabled}
            className="btn btn-primary"
            onClick={() => this.addQuote(this.props.quote.id)}>
            Add quote to my collection
          </button>

          <button
            className="btn btn-primary"
            style={{marginLeft: "12px"}}
            onClick={() => this.fetchRandom()}>
            Next random quote
          </button>
        </div>
      </div>
    )

    return (
      <div>
        {this.props.isLoading ? loadingRender : quoteRender}
      </div>
    )
  }
}

export default connect(null, { fetchRandomQuote })(QuoteCard)
