export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidTask = (task) => {
  return (
    typeof task.title === 'string' &&
    task.title.trim().length > 0 &&
    ['low', 'medium', 'high'].includes(task.priority)
  );
};
