import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';


class NavBar extends Component {

  render() {

    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advaita Says</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
              {!!currentUser() ?
                <LoggedInLinks username={currentUser()}/>
                :
                <LoggedOutLinks/>
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function currentUser() {
  let username;
  if (username = localStorage.getItem('username')) {
    return username;
  } else {
    return null;
  }
}

export default NavBar
