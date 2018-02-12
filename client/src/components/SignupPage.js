import React, {Component} from 'react';

class LoginPage extends Component {
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
    this.props.userSignUpRequest(this.state);
  }

  render() {
    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please Sign Up</h2>

          <label htmlFor="username" className="sr-only">Username</label>
          <input
            type="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            className="form-control"
            placeholder="username"
            required autoFocus
          />
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="form-control"
            placeholder="password"
            required
          /><br/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;
