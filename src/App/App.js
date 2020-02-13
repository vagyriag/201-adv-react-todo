import React from 'react';
import Task from '../Task/Task';
import TextInput from '../TextInput/TextInput';

function App() {

  const [ tasks, setTasks ] = React.useState([
    {
      text: 'Tarea uno',
      completed: true,
      id: 10,
    },
    {
      text: 'Segunda tarea',
      completed: false,
      id: 11,
    }
  ]);

  const updateTask = (index, newCompleted) => {
    console.log(index, newCompleted);
    const copy = tasks.slice();
    copy[index].completed = newCompleted;
    setTasks(copy);
  }

  const handleAdd = (newText) => {
    const newObj = {
      text: newText,
      completed: false,
      id: tasks[tasks.length - 1].id + 1,
    };
    const copy = tasks.slice();
    copy.push(newObj);
    console.log('handleAdd', copy.length);
    setTasks(copy);
  }

  return (<div>
    <h1>todo app</h1>
    
    <TextInput
      onEnter={handleAdd} />

    <div>
      {tasks.map((elem, index) => {
        return <Task
          key={elem.id}
          text={elem.text}
          completed={elem.completed}
          index={index}
          onToggle={updateTask} />;
      })}
    </div>
  </div>);
}

export default App;
