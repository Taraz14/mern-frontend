import React from "react";
import "./App.css";

import { Dashboard } from "./pages/dashboard/Dashboard.page";

import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
