import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { loginUser } from '../actions/authActions';
import { AuthFormWrapper } from '../components/AuthFormWrapper';
import SubmitButton from '../components/SubmitButton';

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
    this.props.loginUser(this.state);
  }

  componentWillReceiveProps(nextProps) {
    // redirect only if user logs in successfully
    if (!!nextProps.token) {
      this.props.history.push('/quotes/random')
    };
    // does not clear username field if username is found but password is wrong
    if (nextProps.errors && nextProps.errors.password) {
      this.setState({
        password: ''
      });
    } else {
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  render() {
    const { username, password} = this.state
    const { errors, isLoading } = this.props

    return (
      <AuthFormWrapper title={"Log In"} handleSubmit={this.handleSubmit}>

        <div className={classnames("form-group", {'has-error': errors && errors.username })}>
          <input
            type="username"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="form-control"
            placeholder="username"
            required autoFocus
          />
          {errors && errors.username ? <span className="help-block">{errors.username}</span> : null}
        </div>

        <div className={classnames("form-group", {'has-error': errors && errors.password })}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="form-control"
            placeholder="password"
            required
          />
          {errors && errors.password ? <span className="help-block">{errors.password}</span> : null}
        </div>

        <div className="form-group">
          <SubmitButton text={"Log In"} isLoading={isLoading}/>
        </div>

      </AuthFormWrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    isLoading: state.auth.isLoading,
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, {loginUser})(LogInPage);
