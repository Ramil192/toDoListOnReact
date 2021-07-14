import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../listItem/listItem';
import './todoList.css';

function TodoList({ todoDate, onDeleted, onToggleDone, showStatus }) {
  let element 
  if (showStatus === 'all') {
    element = todoDate.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <ListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
        </li>
      );
    });
  } else if(showStatus === 'active'){
      element = todoDate.filter((item) => item.done===false).map((item)=>{
        const { id, ...itemProps } = item;
        return (
          <li key={id}>
            <ListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
          </li>
        );
      });
  }else{
    element = todoDate.filter((item) => item.done===true).map((item)=>{
      const { id, ...itemProps } = item;
      return (
        <li key={id}>
          <ListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
        </li>
      );
    });
  }

  return <ul className="todo-list">{element}</ul>;
}

TodoList.defaultProps = {
  todoDate: {
    label: 'default',
    done: false,
    id: 0,
    time: new Date(),
  },
};

TodoList.propTypes = {
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  todoDate: PropTypes.shape([
    {
      label: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.number,
      time: PropTypes.instanceOf(Date),
    },
  ]),
  showStatus:PropTypes.func.isRequired
};
export default TodoList;
