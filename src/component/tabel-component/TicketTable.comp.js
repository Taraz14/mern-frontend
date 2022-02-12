import React from "react";

import { Table } from "react-bootstrap";

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
              <td>{row.nama}</td>
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
