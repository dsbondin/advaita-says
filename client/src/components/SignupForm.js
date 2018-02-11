import React, {Component} from 'react';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ width: "330px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Please Sign Up</h2>
          <label htmlFor="username" className="sr-only">Username</label>
          <input type="username" name="username" className="form-control" placeholder="username" required autoFocus/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" name="password" className="form-control" placeholder="password" required/><br/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;