import React from 'react';

export function AuthFormWrapper({handleSubmit, title, children}) {
  return(
    <div style={{ width: "330px", margin: "auto"}}>
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">{title}</h2>
        {children}
      </form>
    </div>
  )
}
