import React, {Component} from 'react';

const QuotesList = (props) => {
  const loadingRender = <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/></div>

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
