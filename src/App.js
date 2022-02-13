import React from "react";
import "./App.css";

// import { Entry } from "./pages/entry/Entry.page";

// import { Dashboard } from "./pages/dashboard/Dashboard.page";

// import { AddTicket } from "./pages/tiket-baru/AddTicket.page";

import { TicketList } from "./pages/tiket-list/TicketList.page";

import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
