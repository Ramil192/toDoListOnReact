import React from 'react';
import PropTypes from 'prop-types';

export default function TimerRender({ second, minuts, onClickPlay, onClickPause }) {
  return (
    <div className="description modivit">
      <button aria-label="play" onClick={onClickPlay} type="button" className="icon-play" />
      <button aria-label="pause" onClick={onClickPause} type="button" className="icon-pause" />
      <div className="timer">
        {minuts < 10 ? `0${minuts}` : minuts}:{second < 10 ? `0${second}` : second}
      </div>
    </div>
  );
}

TimerRender.propTypes = {
  second: PropTypes.number.isRequired,
  minuts: PropTypes.number.isRequired,
  onClickPlay: PropTypes.func.isRequired,
  onClickPause: PropTypes.func.isRequired,
};
