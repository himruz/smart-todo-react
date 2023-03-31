import React from "react";
import { Input, Button } from "reactstrap";

const Searchpanel = ({ term, handleSearch, toggleForm }) => {
  console.log(term);
  return (
    <div className="d-flex mb-4">
      <Input
        placeholder="Enter Search Term"
        className="me-3"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button color="success" onClick={toggleForm}>
        New 
      </Button>
    </div>
  );
};

export default Searchpanel;
