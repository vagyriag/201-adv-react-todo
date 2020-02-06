import React from 'react';
import Task from '../Task/Task';

function App() {

  const [ tasks, setTasks ] = React.useState([
    {
      text: 'Tarea uno',
      completed: true,
    },
    {
      text: 'Segunda tarea',
      completed: false,
    }
  ]);

  const updateTask = (index, newCompleted) => {
    console.log(index, newCompleted);

    const copy = tasks.slice();
    copy[index].completed = newCompleted;
    setTasks(copy);
  }

  return (<div>
    <h1>todo app</h1>
    
    <div>
      {tasks.map((elem, index) => {
        return <Task text={elem.text} completed={elem.completed}
          index={index}
          onToggle={updateTask} />;
      })}
    </div>
  </div>);
}

export default App;
