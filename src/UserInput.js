import React, { Component } from "react";

class UserInput extends Component {
  state = { name: "" };
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addName(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.updateName}
          type="text"
          placeholder="Add a new name here..."
          value={this.state.name}
        />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
