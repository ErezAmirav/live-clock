import React from 'react';
import Clock from 'react-live-clock';
import '../App.css';

const LiveClock = () => {
  return (
    <div className='clock-container'>
      <h1 className="myClock">
        <Clock style={{ fontFamily: 'CustomFont' }} />
      </h1>
      <h3 className='myDate'>
        <Clock format={'D.M.YY'} style={{ fontFamily: 'CustomFont' }} />
      </h3>
    </div>
  );
};

export default LiveClock;
