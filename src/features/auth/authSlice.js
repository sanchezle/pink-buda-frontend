
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    resetPasswordEmail: null, // New field for storing the email
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
            state.resetPasswordEmail = action.payload; // New reducer to set email
        },
        logOut: (state) => {
            state.token = null;
            state.resetPasswordEmail = null; // Reset on logout
        },
    },
});

export const { setCredentials, setResetPasswordEmail, logOut } = authSlice.actions;

// Correctly export the selector
export const selectCurrentToken = (state) => state.auth.token;

export default authSlice.reducer;

