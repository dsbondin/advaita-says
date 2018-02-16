import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { signupUser } from '../actions/authActions';
import {AuthFormWrapper} from '../components/AuthFormWrapper';
import AuthButton from '../components/AuthButton';

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
    this.props.signupUser(this.state);
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
      <AuthFormWrapper title={"Sign Up"} handleSubmit={this.handleSubmit}>

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
          <AuthButton text={"Sign Up"} isLoading={isLoading}/>
        </div>

      </AuthFormWrapper>
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

export default connect(mapStateToProps, {signupUser})(SignUpPage);
