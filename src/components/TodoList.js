/*************  ✨ Windsurf Command 🌟  *************/
import React, { useState } from 'react';

export default function TodoList({ darkMode = false }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [selectAll, setSelectAll] = useState(false);

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false, selected: false }]);
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const selectAllTasks = () => {
        const updatedTasks = tasks.map(task => ({ ...task, selected: !selectAll }));
        setTasks(updatedTasks);
        setSelectAll(!selectAll);
    };

    const deleteAllSelectedTasks = () => {
        const updatedTasks = tasks.filter(task => !task.selected);
        setTasks(updatedTasks);
        setSelectAll(false);
    };

    return (
        <div style={{
            padding: '1rem',
            background: darkMode ? '#23272b' : '#f8f9fa',
            color: darkMode ? '#f8f9fa' : '#23263a',
            borderRadius: '1rem',
            boxShadow: darkMode ? '0 4px 16px rgba(108,99,255,0.5)' : '0 4px 16px rgba(108,99,255,0.3)',
            maxWidth: '600px',
            margin: '2rem auto',
            fontFamily: 'Montserrat, sans-serif'
        }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Todo List</h3>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    style={{
                        flex: 1,
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #6c63ff',
                        outline: 'none',
                        fontSize: '1rem'
                    }}
                />
                <button
                    onClick={addTask}
                    style={{
                        padding: '0.5rem 1rem',
                        background: '#6c63ff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Add
                </button>
                <button
                    onClick={selectAllTasks}
                    style={{
                        padding: '0.5rem 1rem',
                        background: selectAll ? '#dc3545' : '#6c63ff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    {selectAll ? 'Deselect All' : 'Select All'}
                </button>
                {selectAll && tasks.some(task => task.selected) && (
                    <button
                        onClick={deleteAllSelectedTasks}
                        style={{
                            padding: '0.5rem 1rem',
                            background: '#dc3545',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        Delete All Selected
                    </button>
                )}
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem',
                            marginBottom: '0.5rem',
                            background: task.completed ? '#d4edda' : '#f8f9fa',
                            borderRadius: '0.5rem',
                            boxShadow: '0 2px 8px rgba(108,99,255,0.2)',
                            color: task.completed ? '#155724' : '#23263a'
                        }}
                    >
                        <span
                            onClick={() => toggleTaskCompletion(index)}
                            style={{
                                textDecoration: task.completed ? 'line-through' : 'none',
                                cursor: 'pointer',
                                flex: 1
                            }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(index)}
                            style={{
                                padding: '0.3rem 0.6rem',
                                background: '#dc3545',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}