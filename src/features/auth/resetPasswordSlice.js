// resetPasswordSlice.js
import { createSlice } from '@reduxjs/toolkit';

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: {
        email: '',
        // other states relevant to reset password
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        // other reducers
    },
});

export const { setEmail } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
