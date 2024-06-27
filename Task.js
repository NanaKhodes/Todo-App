import React from 'react';

function Task({ task, onToggleCompleted, onDeleteTask }) {
    const handleToggle = () => {
        onToggleCompleted(task.id);
    };
    const handleDelete = () => {
        onDeleteTask(task.id);
    };

    return (
        <li className={task.completed ? 'task completed' : 'task'}>
            <input type="checkbox" checked={task.completed} onChange={handleToggle} />
            <span>{task.text}</span>
            <button onClick={handleDelete}>Delete</button>

        </li>
     );

}

export default Task;
