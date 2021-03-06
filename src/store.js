import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './pages/Titcket-List/ticketsSlicer';
import loginReducer from './components/Login/loginSlice';
import userReducer from './pages/Dashboard/userSlice';
import newTicketReducer from './components/Add-ticket-form/addTicketSlicer';
import registrationReducer from './components/registration-form/userRegistrationSlice';
import passwordReducer from './components/password-reset/passwordSlice';

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        login: loginReducer,
        user: userReducer,
        openTicket: newTicketReducer,
        registration: registrationReducer,
        password: passwordReducer
    },
});


export default store;