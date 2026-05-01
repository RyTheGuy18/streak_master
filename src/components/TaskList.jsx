import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', xp: 10, recurrence: 'Daily', completed: false },
        { id: 2, title: 'Task 2', xp: 20, recurrence: 'Weekly', completed: false },
    ]);

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        {task.title} - {task.xp} XP - {task.recurrence}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
