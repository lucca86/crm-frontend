import { createNewTicket } from '../../api/ticketApi';
import {    
    openNewTicketPending,
    openNewTicketSuccess,
    openNewTicketFail
} from './addTicketSlicer';



export const openNewTicket = (frmData) => dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            dispatch(openNewTicketPending());

            // Call the API
            const result = await createNewTicket(frmData);
            if(result.status === 'error'){
                return dispatch(openNewTicketFail(result.message))
            }

            dispatch(openNewTicketSuccess(result.message));

        } catch (error) {
            console.log(error);
            dispatch(openNewTicketFail(error.message));
        }
    });
};