import React from 'react';
import './App.css';

const task = (value) => {
  return <li>{value}</li>
  };

const tasks = ['breakfast', 'study', 'lunch', 'study', 'rest', 'study', 'sleep'];

function App() {  
  return tasks.map(task);
}

export default App;
