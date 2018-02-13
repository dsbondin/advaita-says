import React, {Component} from 'react';

const QuotesList = (props) => {
  const loadingRender = <div>Loading quotes...</div>

  const quotesRender = props.quotes.map((quote, index) => {
    return (
      <div>
        <ul>
          <li key={index}>{quote.content}</li>
        </ul>
      </div>
    )
  });

  return(
    <div>
    { props.isLoading ? loadingRender : quotesRender }
    </div>
  )
}

export default QuotesList;
