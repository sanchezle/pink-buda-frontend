import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePasswordResetRequestMutation } from './authApiSlice';
import { setResetPasswordEmail } from './authSlice'; // Ensure this action is correctly imported from your authSlice

const PasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [passwordResetRequest] = usePasswordResetRequestMutation(); // Removed unused destructured properties
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await passwordResetRequest(email).unwrap();
            // Dispatch the email to Redux store after successful request
            dispatch(setResetPasswordEmail(email));
            history('/reset-password');
        } catch (err) {
            console.error('Failed to send password reset email:', err);
            // Handle error here (e.g., show an error message to the user)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default PasswordResetRequest;
