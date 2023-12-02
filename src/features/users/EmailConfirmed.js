import React from 'react';
import { Link } from 'react-router-dom';

const EmailConfirmed = () => {
  return (
    <div>
      <h1>Email Confirmed Successfully</h1>
      <p>Your email has been confirmed. You can now proceed to login.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default EmailConfirmed;
