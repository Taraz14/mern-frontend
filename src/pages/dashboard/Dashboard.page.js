import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import { TicketTable } from "../../component/tabel-component/TicketTable.comp";

import tickets from "../../component/tabel-component/dummy-tickets.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="warning"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Tambah tiket baru
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <div>Total tiket: 50</div>
          <div>Pending tiket: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="mt-2">Tiket yang telah ditambahkan</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
