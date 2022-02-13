import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import { PageBreadcrumb } from "../../component/breadcrumb/PageBreadcrumb.comp";

import { SearchForm } from "../../component/search-form/SearchForm.comp";

import { TicketTable } from "../../component/tabel-component/TicketTable.comp";

import tickets from "../../component/tabel-component/dummy-tickets.json";

export const TicketList = () => {
  const [str, setStr] = useState("");
  const [dispTicket, setDispTicket] = useState(tickets);

  useEffect(() => {}, [str, dispTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (str) => {
    const displayTickets = tickets.filter((row) =>
      row.film.toLowerCase().includes(str.toLowerCase())
    );

    // console.log(displayTickets);
    setDispTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="List Tiket" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="warning">Tambah Tiket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <TicketTable tickets={dispTicket} />
        </Col>
      </Row>
    </Container>
  );
};
