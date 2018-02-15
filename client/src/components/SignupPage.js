import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { signupAction } from '../actions/signupAction';

class SignUpPage extends Component {
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
    this.props.signupAction(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  // redirect only if user logs in successfully
  componentWillReceiveProps(props) {
    if (!!props.token) {
      this.props.history.push('/quotes/random')
    }
  }

  render() {
    const { username, password } = this.state
    const { signup_errors, isLoading } = this.props

    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Sign Up</h2>

          <div className={classnames("form-group", {'has-error': signup_errors && signup_errors.username })}>
            <input
              type="username"
              name="username"
              value={username}
              onChange={this.handleChange}
              className="form-control"
              placeholder="username"
              required autoFocus
            />
            {signup_errors && signup_errors.username ? <span className="help-block">This username&nbsp;{signup_errors.username}</span> : null}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form-control"
              placeholder="password"
              required
            />
          </div>

          <div className="form-group">
            <button disabled={isLoading} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    isLoading: state.auth.isLoading,
    signup_errors: state.auth.signup_errors
  }
}

export default connect(mapStateToProps, {signupAction})(SignUpPage);
