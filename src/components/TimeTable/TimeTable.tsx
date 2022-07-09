import React = require('react');
import './TimeTable.css';
import { getTimesSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { Timer } from '../Timer';

export const TimeTable = () => {
  const times = useSelector(getTimesSelector);
  console.log(times);

  return (
    <table>
      <tbody>
        {times.map(time => (
          <tr key={time.id}>
            <td>{time.title}</td>
            <td><Timer time={time} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
