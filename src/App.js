
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Ticket from './pages/Ticket/Ticket';
import TicketList from './pages/Titcket-List/TicketList';
// import Dashboard from './pages/Dashboard/Dashboard';
// import AddTicket from './pages/New-ticket/AddTicket';
//import EntryPage from './pages/entry/EntryPage';

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
