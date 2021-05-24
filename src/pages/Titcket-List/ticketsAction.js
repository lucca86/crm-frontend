
import { getAllTickets } from '../../api/ticketApi';
import { 
    fetchTicketFail, 
    fetchTicketLoading, 
    fetchTicketSuccess,
    searchTicket } from "./ticketsSlice"



export const fetchAllTickets = () => async (dispatch) => {  // esto es una High Order Function (function que contiene otra function)
    dispatch(fetchTicketLoading());
    try {
        // Fetch de data from de API
        const result = await getAllTickets()

        dispatch(fetchTicketSuccess(result.data.result))
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
        
    }  
};

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTicket(str))
}

