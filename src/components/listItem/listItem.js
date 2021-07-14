import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Editing from './editing';
import './listItem.css';
import Timer from '../timer/timerData';

export default function ListItem({ label, onDeleted, onToggleDone, done, time }) {

  const [editingFlag, setEditingFlag] = useState(false)
  const [editingLabel, setEditingLabel] = useState('')
  const [timeHasPassed, setTimeHasPassed] = useState('0 seconds')

  useEffect(()=>{
    const taimerSetInterfalHasPassed = setInterval(() => setTimeHasPassed(formatDistanceToNow(time, { includeSeconds: true })),5000) 
    return () =>clearInterval(taimerSetInterfalHasPassed);
  },[])

 

  function onEditClick() {
    setEditingFlag(true)
  };

  function getEditingLabel(text) {
    setEditingLabel(text)
    setEditingFlag(false)
  };

  return (
    <div>
      <div className={done ? 'completed view' : 'view'}>
        <input className="toggle" type="checkbox" />
        <label htmlFor="">
          <span tabIndex={0} role="button" className="description" onClick={onToggleDone} onKeyDown={onToggleDone}>
            {editingLabel || label}
          </span>
          <Timer />
          <span className="created">{timeHasPassed}</span>
        </label>
        <button aria-label="edit" type="button" className="icon icon-edit" onClick={onEditClick} />
        <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {editingFlag ? <Editing getEditingLabel={getEditingLabel} /> : ''}
    </div >
  );
}
ListItem.defaultProps = {
  done: false,
  label: 'Default',
  time: new Date(),
};
ListItem.propTypes = {
  done: PropTypes.bool,
  label: PropTypes.string,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  time: PropTypes.instanceOf(Date),
};