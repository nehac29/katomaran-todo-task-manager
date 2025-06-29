import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import {
  loginWithOAuth,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  shareTask
} from './services/api';
import { getToken, setToken, removeToken } from './services/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(getToken());
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const fetchTasks = async () => {
    const res = await getTasks(token);
    setTasks(res || []);
  };

  const handleLogin = async (userData) => {
    const res = await loginWithOAuth(userData);
    if (res.token) {
      setToken(res.token);
      setTokenState(res.token);
      setUser(res.user);
    }
  };

  const handleLogout = () => {
    removeToken();
    setTokenState(null);
    setUser(null);
    setTasks([]);
  };

  const handleAdd = async (taskData) => {
    const res = await createTask(taskData, token);
    fetchTasks();
  };

  const handleUpdate = async (id, taskData) => {
    const res = await updateTask(id, taskData, token);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id, token);
    fetchTasks();
  };

  const handleToggle = async (task) => {
    const newStatus = task.status === 'done' ? 'pending' : 'done';
    await updateTask(task._id, { status: newStatus }, token);
    fetchTasks();
  };

  return (
    <div className="app">
      <Header user={user} onLogout={handleLogout} />
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard
          tasks={tasks}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default App;
