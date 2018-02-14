import React from 'react';

const QuotesList = (props) => {
  const loadingRender = <div><img alt="loading" height="100px" src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif"/></div>

  const quotesRender = props.quotes.map((quote, index) => {
    return (
      <div style={{margin: "20px"}}>
        <p key={index}>
          {quote.content}
        </p>
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
