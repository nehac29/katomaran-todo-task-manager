import React from 'react';

const Login = ({ onLogin }) => {
  const handleGoogleLogin = () => {
    const mockUser = {
      name: 'Demo User',
      email: 'demo@example.com',
      avatar: 'https://i.pravatar.cc/100',
      provider: 'google'
    };
    onLogin(mockUser);
  };

  return (
    <div className="login-page">
      <h2>Login to Todo Task Manager</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
