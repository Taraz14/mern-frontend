import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../component/breadcrumb/PageBreadcrumb.comp";
import tickets from "../../component/tabel-component/dummy-tickets.json";
import { RekamPesan } from "../../component/rekam-pesan/RekamPesan.comp";
import { TiketUpdate } from "../../component/tiket-update/TiketUpdate.comp";
import { useParams } from "react-router-dom";

// const ticket = tickets[0];
export const Tiket = () => {
  const { tId } = useParams("");
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message]);

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
          {tId}
          <div className="nama">Nama : {ticket.nama}</div>
          <div className="film">Film : {ticket.film}</div>
          <div className="tanggal">Tanggal : {ticket.tanggal_pesan}</div>
        </Col>
        <Col className="text-right">
          <Button variant="outline-warning">Tutup Tiket</Button>
        </Col>
      </Row>
      <Row>
        <Col>{ticket.history && <RekamPesan msg={ticket.history} />}</Col>
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
