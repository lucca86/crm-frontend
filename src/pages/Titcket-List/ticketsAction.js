
import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from '../../api/ticketApi';
import { 
    fetchTicketFail, 
    fetchTicketLoading, 
    fetchTicketSuccess,
    fetchSingleTicketLoading, 
    fetchSingleTicketSuccess, 
    fetchSingleTicketFail,
    replyTicketLoading,
    replyTicketSuccess,
    replyTicketFail,
    closeTicketLoading,
    closeTicketSuccess,
    closeTicketFail,
    searchTicket } from "./ticketsSlicer"



export const fetchAllTickets = () => async (dispatch) => {  // esto es una High Order Function (function que contiene otra function)
    dispatch(fetchTicketLoading());
    try {
        // Fetch de data from de API
        const result = await getAllTickets()
        result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message))
         
    }  
};

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTicket(str))
};


//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
      const result = await getSingleTicket(_id);
      dispatch(
        fetchSingleTicketSuccess(
          result.data.result.length && result.data.result[0]
        )
      );
    } catch (error) {
      dispatch(fetchSingleTicketFail(error.message));
    }
  };


//Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
      const result = await updateReplyTicket(_id, msgObj);
      if (result.status === "error") {
        return dispatch(replyTicketFail(result.message));
      }
  
      dispatch(fetchSingleTicket(_id));
  
      dispatch(replyTicketSuccess(result.message));
    } catch (error) {
      console.log(error.message);
      dispatch(replyTicketFail(error.message));
    }
  };


// Actions for closing ticket
export const closeTicket = (_id) => async (dispatch) => {  
    dispatch(closeTicketLoading());
    try {
        // Fetch de data from de API
        const result = await updateTicketStatusClosed(_id)

        if(result.status === 'error') {
            return dispatch(replyTicketFail(result.message));
        }
        dispatch(fetchSingleTicket(_id));
        dispatch(closeTicketSuccess(result.message));
    } catch (error) {
        console.log(error.message);
        dispatch(closeTicketFail(error.message))
         
    }  
};

