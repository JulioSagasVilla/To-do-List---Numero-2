import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>To-Do List</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;