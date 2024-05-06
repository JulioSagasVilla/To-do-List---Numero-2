import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from './actionTypes';

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const editTask = (task) => {
  return {
    type: EDIT_TASK,
    payload: task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: taskId,
  };
};