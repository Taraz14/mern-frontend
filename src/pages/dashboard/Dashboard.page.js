import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../component/tabel-component/TicketTable.comp";
import tickets from "../../component/tabel-component/dummy-tickets.json";
import { PageBreadcrumb } from "../../component/breadcrumb/PageBreadcrumb.comp";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="warning"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Tambah tiket baru
            </Button>
          </Link>
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
        <Col className="recent-ticket mb-4">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
