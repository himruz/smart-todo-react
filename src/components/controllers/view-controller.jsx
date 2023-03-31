import React from "react";
import { Label, Input } from "reactstrap";

const ViewController = ({ view, changeView }) => {
  return (
    <div className="d-flex">
      <Label for="list-vew" className="me-4">
        <Input
          type="radio"
          name="view"
          value="list"
          id="list-view"
          className="d-inline-block"
          checked={view === "list"}
          onChange={changeView}
        />
        List View
      </Label>
      <Label for="table-vew" className="me-4">
        <Input
          type="radio"
          name="view"
          value="table"
          id="table-view"
          className="d-inline-block"
          checked={view === "table"}
          onChange={changeView}
        />
        Table View
      </Label>
    </div>
  );
};

export default ViewController;
