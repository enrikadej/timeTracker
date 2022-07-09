import * as React from 'react';
import './App.css';
import { TimeInput } from './components/TimeInput';
import { TimeTable } from './components/TimeTable';

export const App: React.FC = () => {
   return (
      <div className="app">
         <h1 className="app__header title">
            tracker
         </h1>
         <div className="app_timeInput">
            <TimeInput />
         </div>
         <div className="app_timeTable">
            <TimeTable />
         </div>
      </div>
   );
};
