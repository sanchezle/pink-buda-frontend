import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { usePasswordResetRequestMutation } from './authApiSlice';
import { setResetPasswordEmail } from './authSlice'; // Ensure this action is correctly imported
import '../../components/formStyle.css'
const PasswordResetRequest = () => {
    const [email, setEmail] = useState('');
    const [passwordResetRequest] = usePasswordResetRequestMutation();
    const history = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await passwordResetRequest(email).unwrap();
            // Dispatch the email to the Redux store after a successful request
            dispatch(setResetPasswordEmail(email));
            // Navigate to the reset password page
            console.log('here we shoulg go to resetPassword component')

            history('/reset-password');
        } catch (err) {
            console.error('Failed to send password reset email:', err);
            console.log(err)
            // Handle the error, e.g., show an error message to the user
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
