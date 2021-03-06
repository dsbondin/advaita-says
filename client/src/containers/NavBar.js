import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';


class NavBar extends Component {

  logout(event) {
    this.props.logoutUser();
  }

  render() {
    const isLoggedIn = !!localStorage.getItem("token")
    const username = localStorage.getItem("username")

    const userLinks = (
      <div className="nav navbar-nav navbar-header">
        <li><Link to="/quotes/random">Random</Link></li>
        <li><Link to="/quotes/my">Liked Quotes</Link></li>
        <li><Link to="/quotes/new">New Quote</Link></li>
        <li><Link to="/login" onClick={this.logout.bind(this)}>Log Out</Link></li>
      </div>
    )

    const guestLinks = (
      <div className="nav navbar-nav">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </div>
    )

    return (
      <div className="navbar navbar-inverse" style={{backgroundColor: '#446', marginTop: "12px"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              Advaita Says: {isLoggedIn ? `neti neti, ${username}!`: ''}
            </Link>
          </div>

          <div className="navbar-collapse">
            <ul className="navbar-nav navbar-right">
              {isLoggedIn ? userLinks : guestLinks}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.auth.currentUser }
}

export default connect(mapStateToProps, { logoutUser })(NavBar)
