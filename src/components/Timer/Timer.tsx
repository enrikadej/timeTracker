import React = require("react");
import { useDispatch } from "react-redux";
import { useStopwatch } from 'react-timer-hook';
import { deleteTimeActions } from '../../store/actions';
import { Time } from '../../react-app-env';

type Props = {
  time: Time,
}

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

export const Timer:React.FC<Props> = React.memo(({ time }) => {
  const dispatch = useDispatch();

  const deletingTime = (timeValue: Time) => {
    dispatch(deleteTimeActions(timeValue));
  }
  const dateWatch = new Date();

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

  return (
    <div>
      <span>
        {formatTime(hours, minutes, seconds)}
      </span>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button onClick={start}>Start</button>
      )}
      <button
        type="button"
        onClick={() => {
          deletingTime(time);
        }}
      >
          Delete
      </button>
    </div>
  );
})

// const COUNTER_KEY = 'my-counter';

// if ((i--) > 0) {
//   window.sessionStorage.setItem(COUNTER_KEY, i);
// } else {
//   window.sessionStorage.removeItem(COUNTER_KEY);
//   clearInterval(timer);
//   callback();
// }