import React from "react";
import "./App.css";

// import { Entry } from "./pages/entry/Entry.page";

// import { Dashboard } from "./pages/dashboard/Dashboard.page";

import { AddTicket } from "./pages/tiket-baru/AddTicket.page";

import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
