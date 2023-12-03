import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordConfirmMutation } from './authApiSlice';

const ResetPassword = () => {
    const email = useSelector((state) => state.auth.resetPasswordEmail);
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords don't match");
            return;
        }

        try {
            // Ensure this payload structure matches what your backend expects
            const payload = { email, token, newPassword: password };
            await resetPasswordConfirm(payload).unwrap();

            setMessage('Password reset successfully');
            navigate('/login'); // Navigate to login page upon successful reset
        } catch (err) {
            // Display error message from server or a default error message
            setMessage(err.data?.message || 'Failed to reset password');
        }
    };

    return (
        <section>
            <h1>Set New Password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="token">Token:</label>
                <input
                    type="text"
                    id="token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    required
                />

                <label htmlFor="password">New Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit" disabled={isLoading}>Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </section>
    );
};

export default ResetPassword;
