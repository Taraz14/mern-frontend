import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { FormTicket } from "../../component/form-tiket/FormTicket.comp";

import { PageBreadcrumb } from "../../component/breadcrumb/PageBreadcrumb.comp";

import { shortText } from "../../utils/validation";

const initialFrmData = {
  nama: "",
  film: "",
  tanggal: "",
};

const initialFrmError = {
  nama: false,
  film: false,
  tanggal: false,
};
export const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmError, setFrmError] = useState(initialFrmError);
  useEffect(() => {}, [frmError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });

    // console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmError(initialFrmError);

    const isNamaValid = await shortText(frmData.nama);

    setFrmError({
      ...initialFrmError,
      nama: !isNamaValid,
    });

    console.log("Form submit request received", frmData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Tambah Tiket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormTicket
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}
            frmError={frmError}
          />
        </Col>
      </Row>
    </Container>
  );
};
