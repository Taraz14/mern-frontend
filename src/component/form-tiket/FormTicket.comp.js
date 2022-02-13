import React from "react";
import { Form, Container, Card, Button, Col, Row } from "react-bootstrap";

import PropTypes from "prop-types";

export const FormTicket = ({
  handleOnChange,
  handleOnSubmit,
  frmData,
  frmError,
}) => {
  console.log(frmData);
  return (
    <Container>
      <Card>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Card.Header className="bg-primary text-white">
            Tambah Tiket Baru
          </Card.Header>
          <Card.Body>
            <Form.Group as={Row} className="mb-2">
              <Col sm={3}>
                <Form.Label>Nama</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="nama"
                  value={frmData.nama}
                  onChange={handleOnChange}
                  placeholder="Masukkan Nama"
                  required
                />
                <Form.Text className="text-danger">
                  {frmError.nama && "Nama wajib diisi"}
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Col sm={3}>
                <Form.Label>Film</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  name="film"
                  value={frmData.film}
                  onChange={handleOnChange}
                  placeholder="Masukkan Film"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Col sm={3}>
                <Form.Label>Tanggal Pemesanan</Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  name="tanggal"
                  value={frmData.tanggal}
                  onChange={handleOnChange}
                  required
                />
              </Col>
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Col sm={4} className="text-center d-grid gap-2">
              <Button type="submit" variant="success" size="sm">
                Simpan
              </Button>
            </Col>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
  );
};

FormTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  frmError: PropTypes.object.isRequired,
};
