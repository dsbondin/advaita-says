import React from 'react';
import { Link } from 'react-router-dom';


const LoggedOutLinks = ({username}) => {
  return (
    <div className="nav navbar-nav">
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </div>
  )
}

export default LoggedOutLinks;
