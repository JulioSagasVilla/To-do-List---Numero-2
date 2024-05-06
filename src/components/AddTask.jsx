import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: uuidv4(),
        title: title.trim(),
        deadline: deadline || null,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDeadline('');
    }
  };

  return (
    <div className="add-task">
      <h2>Agregar Tarea</h2>
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
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddTask;