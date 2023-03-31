import React from "react";
import Searchpanel from "./search-panel";
import { Row, Col } from "reactstrap";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  handleSearch,
  toggleFrom,
  handleFilter,
  changeView,
  view,
  clearSelected,
  clearCompleted,
  reset,
  filter
}) => {
  return (
    <div>
      <Searchpanel
        term={term}
        handleSearch={handleSearch}
        toggleForm={toggleFrom}
      />
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} filter={filter}/>
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }} className="d-flex">
          <div className="ms-auto">
            <BulkController
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Controller;
       