import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PrivateRoute from './components/Private-Route/PrivateRoute';
import Ticket from './pages/Ticket/Ticket';
import TicketList from './pages/Titcket-List/TicketList';
import Dashboard from './pages/Dashboard/Dashboard';
import AddTicket from './pages/New-ticket/AddTicket';
import EntryPage from './pages/entry/EntryPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <EntryPage />
          </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/add-ticket'>
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path='/tickets'>
              <TicketList />
            </PrivateRoute>
            <PrivateRoute path='/ticket/:tId'>
              <Ticket />
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
