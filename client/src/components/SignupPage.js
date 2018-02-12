import React, {Component} from 'react';
import classnames from 'classnames'

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
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
    this.setState({ errors: {}, isLoading: true })
    this.props.signUpUser(this.state)
    .then(response => response.json())
    .then(json => { this.setState({
      errors: json.errors,
      isLoading: false
    })
    console.log(this.state)
  })
  }

  render() {
    const { username, password, errors, isLoading } = this.state
    console.log("errors: ", errors)
    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Sign Up</h2>

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
            {errors && errors.username ? <span className="help-block">This username&nbsp;{errors.username}</span> : null}
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

export default LoginPage;
