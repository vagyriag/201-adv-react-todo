import React from 'react';
import Task from '../Task/Task';
import TextInput from '../TextInput/TextInput';

function App() {

  const [ tasks, setTasks ] = React.useState([]);

  const updateTask = (index, newCompleted) => {
    console.log(index, newCompleted);
    const copy = tasks.slice();
    copy[index].completed = newCompleted;
    setTasks(copy);
  }

  const handleAdd = (newText) => {
    let newId;
    if(tasks.length === 0){
      newId = 0;
    } else {
      newId = tasks[tasks.length - 1].id + 1;
    }
    //  tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1
    const newObj = {
      text: newText,
      completed: false,
      id: newId,
    };
    const copy = tasks.slice();
    copy.push(newObj);
    console.log('handleAdd', copy.length);
    setTasks(copy);
  }

  return (<div>
    <h1>todo app</h1>
    
    <TextInput
      onEnter={handleAdd}
      showButton={tasks.length > 0} />

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
