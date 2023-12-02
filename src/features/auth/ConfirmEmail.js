import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmEmail = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('Confirming your email...');

    useEffect(() => {
        confirmEmail(token)
            .then(response => setMessage('Your email has been successfully confirmed!'))
            .catch(error => setMessage('Failed to confirm email. Please try again or contact support.'));
    }, [token]);

    const confirmEmail = async (token) => {
        try {
            const response = await fetch(`/auth/confirmEmail/${token}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Email confirmation failed');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    return (
        <div>
            <h1>Email Confirmation</h1>
            <p>{message}</p>
        </div>
    );
};

export default ConfirmEmail;
