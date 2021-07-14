import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './appHeader.css';

export default function AppHeafer ({addItem}) {

  const [label,setLabel]=useState('')
  
  function onSubmit  (e)  {
    e.preventDefault();
    addItem(label);
    setLabel('')
  };

    return (
      <header className="header">
        <h1>todos</h1>
        <form action="" onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={e=>setLabel(e.target.value)}
            value={label}
          />
        </form>
      </header>
    );
}

AppHeafer.propTypes = {
  addItem: PropTypes.func.isRequired,
};
