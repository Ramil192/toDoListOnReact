import React from 'react';
import PropsTypes from 'prop-types';

import './filters.css';

export default function Filters({ setStatus, showStatus }) {

  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => setStatus('all')} className={showStatus === 'all' ? 'selected' : ''}>
          {' '}
          All{' '}
        </button>
      </li>
      <li>
        <button type="button" onClick={() => setStatus('active')} className={showStatus === 'active' ? 'selected' : ''}>
          {' '}
          Active{' '}
        </button>
      </li>
      <li>
        <button type="button" onClick={() => setStatus('completed')} className={showStatus === 'completed' ? 'selected' : ''}>
          {' '}
          Completed
        </button>
      </li>
    </ul>
  );
}

Filters.propTypes = {
  setStatus: PropsTypes.func.isRequired,
  showStatus:PropsTypes.string.isRequired
};

