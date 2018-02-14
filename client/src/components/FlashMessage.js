import React from 'react';
import classnames from 'classnames';

const FlashMessage = (props) => {
  const { type, text } = props.message
  return (
    <div className={classnames("alert", {
      "alert-success": type === "success",
      "alert-danger": type === "failure"
    })} style={{width: "300px", marginTop: "12px"}}>
      {text}
    </div>
  )
}

export default FlashMessage
