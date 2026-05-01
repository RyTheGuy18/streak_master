import React, { useEffect, useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  // Load data from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const storedStreak = JSON.parse(localStorage.getItem('streak')) || 0;
    const storedXp = JSON.parse(localStorage.getItem('xp')) || 0;
    const storedLevel = JSON.parse(localStorage.getItem('level')) || 1;

    setTasks(storedTasks);
    setStreak(storedStreak);
    setXp(storedXp);
    setLevel(storedLevel);
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('streak', JSON.stringify(streak));
    localStorage.setItem('xp', JSON.stringify(xp));
    localStorage.setItem('level', JSON.stringify(level));
  }, [tasks, streak, xp, level]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setXp(xp + 10); // Add XP for each task
  };

  const completeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setStreak(streak + 1);
    setXp(xp + 20); // More XP for completing tasks
  };

  const calculateLevel = (xp) => {
    return Math.floor(xp / 100) + 1; // Level up every 100 XP
  };

  useEffect(() => {
    setLevel(calculateLevel(xp));
  }, [xp]);

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <h2>Your Streak: {streak}</h2>
        <h2>Your XP: {xp}</h2>
        <h2>Your Level: {level}</h2>
      </div>
      {/* Task input and display components would go here */}
    </div>
  );
};

export default App;