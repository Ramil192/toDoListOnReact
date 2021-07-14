import React, { useState, useEffect } from 'react';
import TimerRender from './timerRender';
import './timer.css';

export default function Timer() {
  const [timer, setSecond] = useState({ second: 0, minuts: 0 });
  const [taimerFlag, setTaimerFlag] = useState(false);
  const [taimerSetinterfal, setTaimerSetInterfal] = useState('');

  useEffect((taimerSetinterfal) => {
    return ()=>{console.log("Delte"); clearInterval(taimerSetinterfal);}
  }, []);

  function onClickPlay() {
    if (!taimerFlag) {
      setTaimerFlag(true);
      const temp = setInterval(() => {
          setSecond(({ second, minuts }) => {
            if (second === 59) {
              return { second: 0, minuts: minuts + 1 };
            }
            return { second: second + 1, minuts };
          });
        }, 1000)
      setTaimerSetInterfal(temp)
    }
  }

  function onClickPause() {
    if (taimerFlag) {
      setTaimerFlag(false);
      clearInterval(taimerSetinterfal);
    }
  }
  return (
    <TimerRender second={timer.second} minuts={timer.minuts} onClickPlay={onClickPlay} onClickPause={onClickPause} />
  );
}
