import React from 'react';

const Quote = (props) => {
  return (
    <div style={{margin: "20px"}}>
      <div key={props.index} style={{borderRadius: "8px", backgroundColor: "#eee", padding: "12px"}}>
        <button className="close" onClick={() => props.removeQuote(props.quote.id)}>&times;</button>
        <p>{props.quote.content}</p>
      </div>
    </div>
  )
}

export default Quote;
