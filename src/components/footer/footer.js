import React from 'react';
import PropsTypes from 'prop-types';
import Filters from '../filter/filters';

import './footer.css';

function Footer({ countDone,  onClearCompleted, setStatus, showStatus}) {
  return (
    <footer className="footer">
      <span className="todo-count">{countDone} items left</span>
      <Filters  setStatus={setStatus} showStatus={showStatus}/>
      <button type="button" onClick={onClearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
}
Footer.defaultProps = {

  countDone: 0,
};
Footer.propTypes = {
  countDone: PropsTypes.number,
  onClearCompleted: PropsTypes.func.isRequired,
  setStatus:PropsTypes.func.isRequired,
  showStatus:PropsTypes.string.isRequired
};
export default Footer;
