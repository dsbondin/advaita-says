import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Advaita Says</a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
