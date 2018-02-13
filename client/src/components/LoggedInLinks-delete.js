import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInLinks = ({ logout }) => {
  return (
    <div className="nav navbar-nav navbar-header">
      <li><Link to="/logout" onClick={logout}>Log Out</Link></li>
    </div>
  )
}

export default LoggedInLinks;
