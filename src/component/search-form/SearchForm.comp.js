import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";

export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={1}>
            Cari:{" "}
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Ketik sesuatu..."
            ></Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
