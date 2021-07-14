import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/appHeader/appHeader';
import ToDolist from './components/taskList/todoList';
import Footer from './components/footer/footer';

import './components/index.css';

export default function App() {


  const [todoDate, setTodoDate] = useState([])

  const [maxId, setMaxId] = useState(100)
  const [showStatus, setShowStatus] = useState('all')

  function setStatus(e){
    setShowStatus(e)
  }

  function createTodoItem(label) {
    setMaxId(maxId + 1)
    return {
      label,
      done: false,
      id: maxId,
      time: new Date(),
    };
  }
  function deleteItem(id) {
    setTodoDate((e) => {
      const idx = e.findIndex((el) => el.id === id);
      const newArray = [...e.slice(0, idx), ...e.slice(idx + 1)];
      return newArray
    })
  };

  function addItem(e) {
    const newItem = createTodoItem(e);

    setTodoDate(() => {
      const newArr = [...todoDate, newItem];
      return newArr
    })

  };

  function onClearCompleted() {
    const newArray = todoDate.filter((el) => el.done);
    newArray.forEach((element) => {
      deleteItem(element.id);
    });
  };

  function onToggleDone(id) {

    setTodoDate((e) => {
      const idx = e.findIndex((el) => el.id === id);
      const oldItem = e[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...e.slice(0, idx), newItem, ...e.slice(idx + 1)];
      return newArray
    })
  };

  const countDone = todoDate.filter((el) => !el.done).length;

  return (
    <div>
      <section className="todoapp">
        <AppHeader addItem={addItem} />
        <section className="main">
          <ToDolist
            todoDate={todoDate}
            onDeleted={deleteItem}
            onToggleDone={onToggleDone}
            showStatus={showStatus}
          />
          <Footer
            countDone={countDone}
            onClearCompleted={onClearCompleted}
            setStatus={setStatus}
            showStatus={showStatus}
          />
        </section>
      </section>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));

