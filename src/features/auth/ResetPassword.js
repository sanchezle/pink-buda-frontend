import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordConfirmMutation } from './authApiSlice';

const ResetPassword = () => {
    const email = useSelector((state) => state.resetPassword.email); // Fetch email from new Redux slice
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
            await resetPasswordConfirm({ email, token, password }).unwrap();
            setMessage('Password reset successfully');
            navigate('/login');
        } catch (err) {
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
                    onChange={(e) => setToken(e.target.value)}
                    value={token}
                    required
                />

                <label htmlFor="password">New Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                />
                <button disabled={isLoading}>Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </section>
    );
};

export default ResetPassword;