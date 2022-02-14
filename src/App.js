import React from "react";
import "./App.css";

// import { Entry } from "./pages/entry/Entry.page";

// import { Dashboard } from "./pages/dashboard/Dashboard.page";

// import { AddTicket } from "./pages/tiket-baru/AddTicket.page";

// import { TicketList } from "./pages/tiket-list/TicketList.page";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Tiket } from "./pages/tiket/Tiket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Tiket />
      </DefaultLayout>
    </div>
  );
}

export default App;
