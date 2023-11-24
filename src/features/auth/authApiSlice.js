import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (err) {
                    console.log(err)
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
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        // New registration mutation
        registerUser: builder.mutation({
            query: newUserData => ({
                url: '/users',
                method: 'POST',
                body: newUserData,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    // Handle the response from the server after registration
                    const { data } = await queryFulfilled;
                    console.log('Registration successful:', data);
                    // Optional: Dispatch login or other actions after successful registration
                } catch (err) {
                    console.error('Registration error:', err);
                }
            }
        }), 
        
    })
})

export const {
    useLoginMutation,
    useRegisterUserMutation,
    useSendLogoutMutation,
    useRefreshMutation,
} = authApiSlice; 