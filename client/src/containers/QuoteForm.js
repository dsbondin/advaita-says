import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNewQuote } from '../actions/quotesActions';


class QuoteForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    this.props.createNewQuote(this.state, token);
    this.setState({
      content: ''
    });
    this.props.history.push('/quotes/my')
  }

  render() {
    return (
      <div style={{ width: "600px", margin: "auto"}}>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h2 className="form-signin-heading">Add a new quote</h2>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="6"
              value={this.state.content}
              onChange={this.handleChange}
              required autoFocus
            >
            </textarea>
          </div>

          <div className="form-group">
            <button
              disabled={this.props.isLoading}
              style={{marginTop: '12px'}}
              className="btn btn-lg btn-primary btn-block"
              type="submit"
            >Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createNewQuote })(QuoteForm);
