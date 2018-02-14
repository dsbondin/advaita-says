import React from 'react';
import { Link } from 'react-router-dom';

const QuoteCard = (props) => {

  const addQuote = (quoteId) => {
    props.addQuoteToCollection(quoteId);
  }

  const loadingRender = <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/></div>
  const quoteRender = (
    <div className="card" style={{backgroundColor: '#eee', padding: '20px'}}>
      <div className="card-block">
        <p className="card-text">{props.quote.content}</p>
        <Link to="/quotes/my" className="btn btn-primary" onClick={() => addQuote(props.quote.id)}>Add quote to my collection</Link>

        <a href="/quotes/random" className="btn btn-primary" style={{marginLeft: "12px"}}>Next quote</a>
      </div>
    </div>
  )

  return (
    <div>
      {props.isLoading ? loadingRender : quoteRender}
    </div>
  )
}

export default QuoteCard
