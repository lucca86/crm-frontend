import { 
    registrationPending,
    registrationSuccess,
    registrationFail} from './userRegistrationSlice';
import {userRegistrationApi} from '../../api/userApi';

export const userRegistration = (frmDt) => async dispatch => {
    
    try {
        dispatch(registrationPending())
        // api
        const result = await userRegistrationApi(frmDt);
        result.status === 'success' 
            ? dispatch(registrationSuccess(result.message))
            : dispatch(registrationFail(result.message))

    } catch (error) {
        dispatch(registrationFail(error.message))
    }
}