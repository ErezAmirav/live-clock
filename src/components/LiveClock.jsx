import React from 'react';
import Clock from 'react-live-clock';
import '../App.css';

const LiveClock = () => {
  return (
    <div className="clock-container">
      <h1 className="myClock">
        <Clock interval={1000} ticking={true} />
      </h1>
      <h3 className="myDate">
        <Clock format={'D.M.YY'} />
      </h3>
    </div>
  );
};

export default LiveClock;
