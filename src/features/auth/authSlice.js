import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    resetPasswordEmail: null, // Add a new field for reset password email
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload;
            state.token = accessToken;
        },
        setResetPasswordEmail: (state, action) => {
            state.resetPasswordEmail = action.payload; // Add a new reducer for setting reset password email
        },
        logOut: (state) => {
            state.token = null;
            state.resetPasswordEmail = null; // Clear reset password email on logout
        },
    }
});

export const { setCredentials, setResetPasswordEmail, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
