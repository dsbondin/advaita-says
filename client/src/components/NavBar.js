import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advaita Says</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
