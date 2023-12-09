
import TaskForm from './Components/TaskForm.js';
import './App.css';
import TaskList from './Components/TaskList.js';
import { useState } from 'react';


function App() {

  const[tasks, setTasks] = useState([])

  return (
    <div className="bg-slate-300 min-h-screen pt-4">
    <div className="max-w-xl mx-auto shadow-xl p-4 bg-white rounded-lg">
      <h3 className="text-center mt-4">Task Management Application</h3>
      <TaskForm tasks={tasks} setTasks={setTasks} />
    </div>
    <div className="max-w-xl mx-auto shadow-xl p-4 bg-white rounded-lg mt-8">
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
    ̦
  </div>
  );
}

export default App;
