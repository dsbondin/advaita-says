import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';


class NavBar extends Component {

  render() {
    const { username } = this.props;
    const loggedIn = !!username

    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Advaita Says</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav navbar-right">
              {loggedIn ? <LoggedInLinks username={username}/> : <LoggedOutLinks/>}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!!state.auth.user) {
    return {
      username: state.auth.user.username
    }
  }
}

export default connect(mapStateToProps)(NavBar)
