import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-primary text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Masukkan Email Terdaftar"
                required
              />
            </Form.Group>
            <Form.Group>
              <br />
              <Button type="sbmit" className="btn-danger">
                Reset Password
              </Button>
            </Form.Group>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>
            Login Sekarang?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
