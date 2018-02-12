import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { signInUser } from '../actions/signInUser';

class LogInPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { username, password} = this.state
    const { errors, isLoading } = this.props

    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Log In</h2>

          <div className="form-group">
            <input
              type="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              className="form-control"
              placeholder="username"
              required autoFocus
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, {signInUser})(LogInPage);
