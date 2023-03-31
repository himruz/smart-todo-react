import React from "react";
import PropTypes from "prop-types";
import { Input, Table, Button } from "reactstrap";

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
  return (
    <tr>
      <th>
        <Input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </th>
      <th>{todo.time.toDateString()}</th>
      <th>{todo.text}</th>
      <th>
        <Button
          className="ml-auto"
          color={todo.isComplete ? "danger" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </th>
    </tr>
  );
};

RowItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th scope="row">#</th>
          <th>Time</th>
          <th>Todo</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <RowItem
              key={todo.id}
              todo={todo}
              toggleSelect={toggleSelect}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableView;
