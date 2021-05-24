import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './pages/Titcket-List/ticketsSlice';

const store = configureStore({
    reducer: {
        tickets: ticketReducer
    },
});


export default store;