import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

export const TiketUpdate = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Balas Pesan</Form.Label>
      <br />
      <Form.Text className="text-muted text-sm">
        Silakan balas pesanmu di sini.
      </Form.Text>
      <Form.Control
        as="textarea"
        row="5"
        name="detail"
        value={msg}
        onChange={handleOnChange}
      />
      <div className="text-right mt-3 mb-4">
        <Button variant="warning" type="submit">
          Kirim
        </Button>
      </div>
    </Form>
  );
};

TiketUpdate.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};
