import React, { useState } from 'react';
import PropsTypes from 'prop-types';

export default function Editing ({getEditingLabel})  {

  const[laberEditing,setlaberEditing]= useState('')

  function onLabelChange (e) {
    setlaberEditing(e.target.value) 
  };

  function onSubmit  (e) {
    e.preventDefault();
    getEditingLabel(laberEditing);
    setlaberEditing('') 
  };
    return (
      <span className="editing">
        <form action="" onSubmit={onSubmit}>
          <input type="text" onChange={onLabelChange} className="edit" placeholder="Editing task" value={laberEditing} />
        </form>
      </span>
    );
  }

Editing.propTypes = {
  getEditingLabel: PropsTypes.func.isRequired,
};
