import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
// import { DefaultLayout } from "./layout/DefaultLayout";
import { Entry } from "./pages/entry/Entry.page";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/tiket-baru/AddTicket.page";
import { TicketList } from "./pages/tiket-list/TicketList.page";
import { Tiket } from "./pages/tiket/Tiket.page";

import { Header } from "./layout/partials/Header.part";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Entry />} />
        </Routes>
        <div>
          {/* <DefaultLayout> */}
          {/* <Header /> */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/ticket-list" element={<TicketList />} />
            <Route path="/ticket/:tid" element={<Tiket />} />
            <Route path="/logout" element={<Navigate to="/" />} />
          </Routes>
          {/* </DefaultLayout> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
