import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            }),
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logOut());
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState());
                    }, 1000);
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials({ accessToken: data.accessToken }));
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        registerUser: builder.mutation({
            query: newUserData => ({
                url: '/users',
                method: 'POST',
                body: newUserData,
            }),
        }),
        confirmEmail: builder.mutation({
            query: token => ({
                url: `/auth/confirmEmail/${token}`,
                method: 'GET',
            }),
        }),
        passwordResetRequest: builder.mutation({
            query: email => ({
                url: '/auth/reset-password-request',
                method: 'POST',
                body: { email },
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ email, token, password }) => ({
                url: '/auth/reset-password-confirm',
                method: 'POST',
                body: { email, token, password },
            }),
        }),
    })
});

export const {
    useLoginMutation,
    useRegisterUserMutation,
    useSendLogoutMutation,
    useRefreshMutation,
    useConfirmEmailMutation,
    usePasswordResetRequestMutation,
    useResetPasswordConfirmMutation, // renamed for clarity
} = authApiSlice;
