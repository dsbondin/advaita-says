import React from 'react';

const Quote = (props) => {
  return (
    <div style={{margin: "20px"}}>
      <div style={{borderRadius: "8px", backgroundColor: "#eee", padding: "12px"}}>
        <button className="close" style={{margin: "4px"}} onClick={() => props.removeQuote(props.quote.id)}>&times;</button>
        <p style={{fontStyle: "italic", color: "#603"}}>{props.quote.content}</p>
      </div>
    </div>
  )
}

export default Quote;
