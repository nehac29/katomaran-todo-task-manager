// frontend/src/pages/Dashboard.jsx

import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

const Dashboard = ({ tasks, onAdd, onUpdate, onDelete, onToggle }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsCreating(true);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setIsCreating(false);
  };

  const handleSubmit = (data) => {
    if (editingTask) {
      onUpdate(editingTask._id, data);
    } else {
      onAdd(data);
    }
    handleCancel();
  };

  return (
    <div className="dashboard">
      <h2>Your Tasks</h2>
      <button onClick={() => setIsCreating(true)}>+ New Task</button>
      {isCreating && (
        <TaskForm
          onSubmit={handleSubmit}
          initialData={editingTask}
          onCancel={handleCancel}
        />
      )}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
