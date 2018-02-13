import React from 'react';

const QuoteCard = (props) => {
  const loadingRender = <div>Loading quote...</div>
  const quoteRender = <div>{props.quote.content}</div>

  return (
    <div>
      {props.isLoading ? loadingRender : quoteRender}
    </div>
  )
}

export default QuoteCard
