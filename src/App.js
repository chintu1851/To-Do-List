import { useState, createContext } from 'react';
import './App.css';
import Description from './Description';

export const Appcontext = createContext(null);

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const fieldClick = (e) => {
    setTask(e.target.value);
  };

  const buttonClick = () => {
    if (task === '') {
      alert("Please enter value")
    }
    else {
      const newTask = { taskName: task, completed: false };
      const updatedTasks = [...tasks, newTask];
      localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
      console.log("this is tasks", updatedTasks)
      setTask('');
    }
  };

  const deletetask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('allTasks', JSON.stringify(updatedTasks)); // Update localStorage
  };

  const checkComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
     console.log("this is tasks", updatedTasks)
     localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
  };

  const updateitem = (index) => {
    setEditIndex(index);

  };

  const handleEditChange = (e, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].taskName = e.target.value;
    setTasks(updatedTasks);
    localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
  };

  return (

    <div>

      <div className='inputfield' >
        <h1>Todo-List</h1>
        <input placeholder='Enter Task' type='text' name='task' value={task} className='inputtodo' required onChange={fieldClick}></input><br></br>
        <button onClick={buttonClick} className='submitbutton'>Submit</button>
      </div>

      <Appcontext.Provider value={{ task, tasks, editIndex, setTask, setTasks, setEditIndex, buttonClick, deletetask, checkComplete, updateitem, handleEditChange }}>
        <Description></Description>
      </Appcontext.Provider>

    </div>

  );
}

export default App;
