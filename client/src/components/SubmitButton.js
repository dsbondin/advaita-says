import React from 'react';

const SubmitButton = ({text, isLoading}) => {
  return(
    <button
      className="btn btn-lg btn-primary btn-block"
      disabled={isLoading}
      style={{backgroundColor: "#669", borderColor: "#669"}}
      type="submit">
      {text}
    </button>
  )
}

export default SubmitButton;
