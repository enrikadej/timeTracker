import React = require('react');
import './TimeTable.css';
import { getTimesSelector } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Timer } from '../Timer';
import { deleteTimeActions } from '../../store/actions';
import { Time } from '../../react-app-env';

export const TimeTable = () => {
  const times = useSelector(getTimesSelector);
  const dispatch = useDispatch();
  console.log(times);

  const deletingTime = (timeValue: Time) => {
    dispatch(deleteTimeActions(timeValue));
  }

  return (
    <table>
      <tbody>
        {times.map(time => (
          <tr key={time.id}>
            <td>{time.title}</td>
            <td><Timer /></td>
            <td>
              <button>
                Play
              </button>
            </td>
            <td>
            <button
              type="button"
              onClick={() => {
                deletingTime(time);
              }}
            >
                Delete
            </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
