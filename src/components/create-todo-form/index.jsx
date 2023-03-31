import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class CreateTodoForm extends Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    e.target.reset();
    this.setState({
      text: "",
      description: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Enter Task</Label>
          <Input
            placeholder="Write Your Todo"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Describe Task</Label>
          <Input
          type="textarea"
            placeholder="Write some short description about your todo"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button type="submit">Create Your Task</Button>
      </Form>
    );
  }
}

export default CreateTodoForm;
