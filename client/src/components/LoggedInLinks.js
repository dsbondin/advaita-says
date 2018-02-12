import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInLinks = ({username}) => {
  return (
    <div className="nav navbar-nav navbar-header">
      <li><Link to="">Welcome, {username}!</Link></li>
      <li><Link to="/logout">Log Out</Link></li>
    </div>
  )
}

export default LoggedInLinks;
