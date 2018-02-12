import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class NavBar extends Component {

  render() {
    const { username } = this.props

    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advaita Says</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
            {!!username ? (
              <div className="nav navbar-nav"><li><Link to="">Welcome, {username}!</Link></li>
              <li><Link to="/logout">Log Out</Link></li></div>
            ) : (
              <div className="nav navbar-nav"><li><Link to="/login">Log In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li></div>
            )
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.auth.user.username
  }
}

export default connect(mapStateToProps)(NavBar)
