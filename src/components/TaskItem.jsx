import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onRemoveTask }) => {
  const { id, title, deadline } = task;

  const handleRemoveTask = () => {
    onRemoveTask(id);
  };

  return (
    <li className="task-item">
      <div className="task-info">
        <h3>{title}</h3>
        {deadline && <p>Fecha límite: {deadline}</p>}
      </div>
      <button className="remove-task" onClick={handleRemoveTask}>
        Eliminar
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  }).isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

export default TaskItem;