import React from 'react';
import { Link } from 'react-router-dom';


const LoggedOutLinks = () => {
  return (
    <div className="nav navbar-nav">
      <li><Link to="/signup">Sign Up</Link></li>
      <li><Link to="/login">Log In</Link></li>
    </div>
  )
}

export default LoggedOutLinks;
