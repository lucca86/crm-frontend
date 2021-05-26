import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './pages/Titcket-List/ticketsSlice';
import loginReducer from './components/Login/loginSlice';
import userReducer from './pages/Dashboard/userSlice';

const store = configureStore({
    reducer: {
        tickets: ticketReducer,
        login: loginReducer,
        user: userReducer
    },
});


export default store;