import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button color="danger" onClick={clearSelected}>Clear Selected</Button>
      <Button color="danger" onClick={clearCompleted}>Clear Completed</Button>
      <Button color="success" onClick={reset}>Reset</Button>
    </ButtonGroup>
  );
};

export default BulkController;
