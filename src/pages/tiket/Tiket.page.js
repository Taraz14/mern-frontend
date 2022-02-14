import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../component/breadcrumb/PageBreadcrumb.comp";
import tickets from "../../component/tabel-component/dummy-tickets.json";
import { RekamPesan } from "../../component/rekam-pesan/RekamPesan.comp";
import { TiketUpdate } from "../../component/tiket-update/TiketUpdate.comp";

const ticket = tickets[0];
export const Tiket = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert(message);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Tiket" />
        </Col>
      </Row>
      <Row>
        <Col className="text-weight-bolder text-secondary">
          <div className="nama">Nama : {ticket.nama}</div>
          <div className="film">Film : {ticket.film}</div>
          <div className="tanggal">Tanggal : {ticket.tanggal_pesan}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-warning">Tutup Tiket</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <RekamPesan msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <TiketUpdate
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
