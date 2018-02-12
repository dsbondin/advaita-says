import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { logoutAction } from '../actions/logoutAction';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';


class NavBar extends Component {

  logout = () => {
    localStorage.clear();
    this.props.logoutAction();
  }

  render() {
    const isLoggedIn = !!localStorage.getItem("token")
    const userLinks = (
      <div className="nav navbar-nav navbar-header">
        <li><Link to="/logout" onClick={this.logout}>Log Out</Link></li>
      </div>
    )
    const guestLinks = (
      <div className="nav navbar-nav">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </div>
    )

    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advaita Says</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
              {isLoggedIn ? userLinks : guestLinks}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
