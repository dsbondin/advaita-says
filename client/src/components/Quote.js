import React from 'react';

const Quote = (props) => {
  return (
    <div style={{margin: "16px"}}>
      <div style={{borderRadius: "8px", backgroundColor: "#eee", padding: "16px"}}>
        <span style={{fontStyle: "italic", color: "#603", margin: "16px"}}>{props.quote.content}</span>

        <button
          type="button"
          className="btn btn-xs"
          style={{float: "right", color: "#d00", backgroundColor: "#faa"}}
          onClick={() => props.removeQuote(props.quote.id)}>
            <b>&times;</b>
          </button>

      </div>
    </div>
  )
}

export default Quote;
