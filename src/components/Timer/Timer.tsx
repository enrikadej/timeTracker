import moment = require("moment");
import React = require("react");
import Moment from 'react-moment';

export const Timer = React.memo(() => {
  const hours = 0;
  const min = 0;
  const sec = 0;
  const start = moment();
  
  return (
    <span>
      <Moment 
        date={start} 
        format="hh:mm:ss"
        interval={1000}
        durationFromNow
      />
    </span>
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