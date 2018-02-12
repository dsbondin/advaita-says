import React, {Component} from 'react';

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
    this.setState({ error: {}, isLoading: true })
    this.props.signUpUser(this.state)
    .then(response => response.json())
    .then(json => { this.setState({
      errors: json.errors
    })
    console.log(this.state)
  })
  }

  render() {
    const { errors } = this.state
    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please Sign Up</h2>

          <input
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            className="form-control"
            placeholder="username"
            required autoFocus
          />
          {errors && errors.username ? <span className="help-block">This username&nbsp;{errors.username}</span> : null}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="form-control"
            placeholder="password"
            required
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit" style={{ marginTop: "12px"}}>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;
