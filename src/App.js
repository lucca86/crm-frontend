
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import AddTicket from './pages/New-ticket/AddTicket';
//import EntryPage from './pages/entry/EntryPage';

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
