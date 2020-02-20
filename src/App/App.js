import React from 'react';
import Task from '../Task/Task';
import TextInput from '../TextInput/TextInput';
import PropTypes from 'prop-types';
import CardNumber from '../CardNumber/CardNumber';

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

  const handleToggleAll = () => {
    
    const result = tasks.every((elem) => {
      return elem.completed;
    });
    console.log('handleToggleAll', result);

    const copy = tasks.slice();
    copy.forEach((elem, index) => {
      elem.completed = !result;
    });
    setTasks(copy);
  }

  var activeTasks = 0;
  tasks.forEach((elem) => {
    if(!elem.completed) activeTasks++;
  });
/*
  const activeTasksTemp = tasks.filter((elem) => {
    return !elem.completed;
  });

  const activeTasksTemp = tasks.filter((elem) => !elem.completed);
*/

  const [ cardNumber, setCardNumber ] = React.useState('');

  const handleCardNumberChange = (newText) => {
    setCardNumber(newText);
  }

  const handleDelete = () => {
    setCardNumber('');
  }

  return (<div>
    <h1>todo app {activeTasks}</h1>

    <button onClick={handleDelete}>borrar</button>

    <p>{cardNumber}</p>
    <CardNumber
      onTextChange={handleCardNumberChange}
      value={cardNumber} />
    
    <TextInput
      onEnter={handleAdd}
      onToggleAll={handleToggleAll}
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
