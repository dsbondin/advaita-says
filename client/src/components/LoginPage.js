import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { loginAction } from '../actions/authActions';

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
    const { loginAction } = this.props;
    loginAction(this.state);
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
    const { username, password} = this.state
    const { errors, isLoading } = this.props

    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Log In</h2>

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
            <button disabled={isLoading} className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
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
    errors: state.auth.errors
  }
}

export default connect(mapStateToProps, {loginAction})(LogInPage);
