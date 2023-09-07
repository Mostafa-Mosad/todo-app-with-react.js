import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-primary">New ToDo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              id="content"
              rows="3"
              value={this.state.content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
