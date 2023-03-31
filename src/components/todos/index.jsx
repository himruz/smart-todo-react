import React, { Component } from "react";
import ListView from "../listview";
import TableView from "../tableview";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Controller from "../controllers";
import CreateTodoForm from "../create-todo-form";
import shortid from "shortid";

class Todos extends Component {
  state = {
    todos: [
      {
        id: "9ghdjhgrfed098gre90",
        text: "first todo ",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "9ghdjhgrfed0fg09bed6g",
        text: "second todo text",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "5Ko0hdjhgrfed0fg09bed6g",
        text: "third todo text",
        description: "simple description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    searchTerm: " ",
    view: "list",
    filter: "all",
  };

  toggleComplete = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;
    this.setState({ todos });
  };

  toggleForm = () => {
    this.setState({
      isOpenTodoForm: !this.state.isOpenTodoForm,
    });
  };

  handleSearch = (value) => {
    this.setState({
      searchTerm: value,
    });
  };

  createTodo = (todo) => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];
    const todo = todos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;
    this.setState({ todos });
  };

  handleFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  changeView = (e) => {
    this.setState({
      view: e.target.value,
    });
  };
  clearCompleted = () => {
    const todos = this.state.todos.filter((todo) => !todo.isComplete);
    this.setState({
      todos,
    });
  };
  clearSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelect);
    this.setState({
      todos,
    });
  };
  reset = () => {
    this.setState({
      isOpenTodoForm: false,
      searchTerm: " ",
      view: "list",
      filter: "all",
    });
  };

  performSearch = () => {
    return this.state.todos.filter((todo) =>
      todo.text
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    );
  };

  performFilter = (todos) => {
    const { filter } = this.state;

    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === "list" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    );
  };

  render() {
    return (
      <div>
        <h1 className="display-4 text-center mb-5">Stack Todos</h1>
        <Controller
          term={this.state.searchTerm}
          toggleFrom={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearCompleted={this.clearCompleted}
          clearSelected={this.clearSelected}
          reset={this.reset}
          filter={this.state.filter}
        />
        <div>{this.getView()}</div>

        <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Todos;
