import React from 'react'
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';

export const Tasks = () => {
    const { tasks } = useTasks('1');

    console.log(tasks);

    const projectName = '';

    return (
        <div className="tasks" data-testId="tasks">
            <h2 data-testId="project-name">{projectName}
            </h2>

            <ul className="task__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}