import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { PrivateRoute } from "./component/private-route/PrivateRoute.comp";

import { Entry } from "./pages/entry/Entry.page";

import { Dashboard } from "./pages/dashboard/Dashboard.page";

import { AddTicket } from "./pages/tiket-baru/AddTicket.page";

import { TicketList } from "./pages/tiket-list/TicketList.page";

import { Tiket } from "./pages/tiket/Tiket.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tiket-list">
            <TicketList />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Tiket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
