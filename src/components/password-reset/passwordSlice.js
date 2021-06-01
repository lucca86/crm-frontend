import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    status: "",
    message: "",
    showUpdatePassForm: false,
    email: ""
};

const passwordReset = createSlice({
    name: 'passwrodReset',
    initialState,
    reducers: {
        otpReqPending: (state) => {
            state.isLoading = true;
        },
        otpReqSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'success';
            state.message = payload.message;
            state.email = payload.email;
            state.showUpdatePassForm = true;
        },
        otpReqFail: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'error';
            state.message = payload;
        },
        updatePasswordSuccess: (state, {payload}) => {
            state.isLoading = false;
            state.status = 'success';
            state.message = payload;
            //state.showOtpForm = false;
        },
    },
});

const {reducer, actions} = passwordReset;

export const {
    otpReqPending,
    otpReqSuccess,
    otpReqFail,
    updatePasswordSuccess
} = actions;

export default reducer;