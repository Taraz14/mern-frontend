import React from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Pemesan</th>
          <th>Film</th>
          <th>Tanggal Pemesanan</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/ticket/${row.id}`}>{row.nama}</Link>
              </td>
              <td>{row.film}</td>
              <td>{row.tanggal_pesan}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center">
              Tidak ada pesanan tiket
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
