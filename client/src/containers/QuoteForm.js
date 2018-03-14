import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNewQuote } from '../actions/quotesActions';
import SubmitButton from '../components/SubmitButton';


class QuoteForm extends Component {
  constructor() {
    super();

    this.state = {
      content: '',
      authorId: 1,
      authors: [],
    }
  }

  componentWillMount() {
    this.fetchAuthors();
  }

  fetchAuthors() {
    fetch('/api/authors')
      .then(response => response.json())
      .then(authors => this.setState({
        authors: authors
      })
    )
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              required autoFocus
            >
            </textarea>
          </div>

          <div className="form-row">
            <div className="col-md-2">
              <span style={{margin: "auto"}}>Author: </span>
            </div>
            <div className="col-md-5">
              <select className="form-control" name="authorId" onChange={this.handleChange}>
                {this.state.authors.map(author => {
                  return <option key={author.id} value={author.id}>{author.name}</option>
                })}
              </select>
            </div>
            <div className="col-md-5">
              <input type="text" className="form-control"/>
            </div>
          </div>

          <div className="form-group" style={{marginTop: "60px"}}>
            <SubmitButton text={"Submit"} isLoading={this.props.isLoading}/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createNewQuote })(QuoteForm);
