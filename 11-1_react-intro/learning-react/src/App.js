import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['React', 'horta', 'mercado', 'tomar sol'];
  return tasks.map(task => <li>{task}</li>)
  // return task('I\'m so cool');
}

export default App;
