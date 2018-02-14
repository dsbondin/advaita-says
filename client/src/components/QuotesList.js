import React from 'react';

const QuotesList = (props) => {
  const loadingRender = <div><img alt="loading" height="100px" src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif"/></div>

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
