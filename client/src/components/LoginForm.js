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
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          <input type="submit"/>
        </form>


      </div>
    )
  }
}

export default LoginForm;
