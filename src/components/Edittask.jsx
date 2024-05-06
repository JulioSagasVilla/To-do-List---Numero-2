import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions';

const EditTask = ({ task, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [deadline, setDeadline] = useState(task.deadline || '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const updatedTask = {
        ...task,
        title: title.trim(),
        deadline: deadline || null,
      };
      dispatch(editTask(updatedTask));
      onCancel();
    }
  };

  return (
    <div className="edit-task">
      <h2>Editar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Fecha límite (opcional)"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <div className="buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;