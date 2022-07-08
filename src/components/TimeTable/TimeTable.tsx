import React = require('react');
import './TimeTable.css';
import { getTimesSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';

// const times = useSelector(getTimesSelector);

export const TimeTable = () => {
  return (
    <>
      <table>
        {/* {times.map(time => {
          <tr key={time.id}>
            <td>{time.title}</td>
            <td>{`tic tac time`}</td>
            <td>
              <button>

              </button>
            </td>
            <td>
            <button>
                
            </button>
            </td>
          </tr>
        })} */}
      </table>
    </>
  )
};
