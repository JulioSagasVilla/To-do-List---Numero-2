import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/actions';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div className="task-list">
      <h2>Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onRemoveTask={handleRemoveTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;