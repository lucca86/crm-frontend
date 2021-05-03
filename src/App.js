
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
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
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
