import React from 'react';

const AuthButton = ({text, isLoading}) => {
  return(
    <button
      className="btn btn-lg btn-primary btn-block"
      disabled={isLoading}
      type="submit">
      {text}
    </button>
  )
}

export default AuthButton;
