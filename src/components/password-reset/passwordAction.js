import { reqPasswordOtp, updateUserPassword } from '../../api/passwordApi';
import { openNewTicketFail } from '../Add-ticket-form/addTicketSlicer';
import {otpReqPending, otpReqSuccess, otpReqFail, updatePasswordSuccess} from './passwordSlice';

export const sendPasswordResetOtp = email => async dispatch => {
    try {
        dispatch(otpReqPending());

        const {status, message} = await reqPasswordOtp(email);
        if(status === 'success'){
            return dispatch(otpReqSuccess({message, email}))
        };

        dispatch(otpReqFail(message));

    } catch (error) {
        dispatch(otpReqFail(error.message));
    }
};

export const updatePassword = frmData => async dispatch => {
    try {
        dispatch(otpReqPending());

        const {status, message} = await updateUserPassword(frmData);
        if(status === 'success'){
            return dispatch(updatePasswordSuccess(message))
        };

        dispatch(openNewTicketFail(message));

    } catch (error) {
        dispatch(otpReqFail(error.message));
    }
}