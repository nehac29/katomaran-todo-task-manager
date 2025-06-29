import React from 'react';

const Header = ({ user, onLogout }) => {
  return (
    <header className="app-header">
      <h1>Todo Task Manager</h1>
      {user && (
        <div className="user-info">
          <img src={user.avatar} alt={user.name} className="avatar" />
          <span>{user.name}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
