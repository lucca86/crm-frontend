import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './pages/Titcket-List/ticketsSlicer';
import loginReducer from './components/Login/loginSlice';
import userReducer from './pages/Dashboard/userSlice';
import newTicketReducer from './components/Add-ticket-form/addTicketSlicer';

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
    },
});


export default store;