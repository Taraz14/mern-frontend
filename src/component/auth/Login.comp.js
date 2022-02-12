import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  username,
  pass,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-warning text-center">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={handleOnChange}
                placeholder="Masukkan Username"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={pass}
                onChange={handleOnChange}
                placeholder="Masukkan Password"
                required
              />
            </Form.Group>
            <Form.Group>
              <br />
              <Button type="sbmit" className="btn-warning">
                Sign In
              </Button>
            </Form.Group>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("reset")}>
            Lupa Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};
