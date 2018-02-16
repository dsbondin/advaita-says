import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNewQuote } from '../actions/quotesActions';
import SubmitButton from '../components/SubmitButton';


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
              style={{fontStyle: "italic", fontSize: "16px", color: "#603"}}
              rows="6"
              value={this.state.content}
              onChange={this.handleChange}
              required autoFocus
            >
            </textarea>
          </div>

          <div className="form-group">
            <SubmitButton text={"Submit"} isLoading={this.props.isLoading}/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createNewQuote })(QuoteForm);
