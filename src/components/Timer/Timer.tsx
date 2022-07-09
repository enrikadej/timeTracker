import React = require("react");
import { useDispatch } from "react-redux";
import { useStopwatch } from 'react-timer-hook';
import { deleteTimeActions } from '../../store/actions';
import { Time } from '../../react-app-env';
import './Timer.css';

const formatTime = (
  hh: number, 
  mm: number, 
  ss: number
) => {
  const hourTime = hh < 10 ? `0${hh}` : `${hh}`;
  const minuteTime = mm < 10 ? `0${mm}` : `${mm}`;
  const secondTime = ss < 10 ? `0${ss}` : `${ss}`;

  return `${hourTime}:${minuteTime}:${secondTime}`
}

type Props = {
  time: Time,
}

export const Timer:React.FC<Props> = React.memo(({ time }) => {
  const dispatch = useDispatch();

  const deletingTime = (timeValue: Time) => {
    dispatch(deleteTimeActions(timeValue));
  }

  const dateWatch = new Date();

  console.log('timer');

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
  } = useStopwatch({ 
    autoStart: true, 
    offsetTimestamp: dateWatch 
  });

  let showTime = formatTime(hours, minutes, seconds);
  
  localStorage.setItem(`${time.id}`, showTime);
  console.log(localStorage.getItem(`${time.id}`));
  const localTime = localStorage.getItem(`${time.id}`);
  

  if (localTime !== '') {
    const localHours = localTime.substring(0, 2);
    const localMinutes = localTime.substring(3, 5);
    const localSeconds = localTime.substring(6, 8);

    showTime = formatTime(+localHours, +localMinutes, +localSeconds);
  }
  


  return (
    <div className="timer">
      <span className="timer__time">
        {showTime}
      </span>
      <span className="timer__buttons">
        {isRunning ? (
          <img 
            onClick={pause}
            className="timer__button"
            src="../../images/pause_circle_black_24dp.svg" 
            alt="Pause" 
          />
        ) : (
          <img 
            onClick={start}
            className="timer__button"
            src="../../images/play_circle_black_24dp.svg" 
            alt="Play" 
          />
        )}
        <img 
          onClick={() => {
            deletingTime(time);
          }}
          className="timer__button"
          src="../../images/remove_circle_black_24dp.svg" 
          alt="Delete" 
        />
      </span>
    </div>
  );
})
