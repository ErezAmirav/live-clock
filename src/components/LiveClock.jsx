import React from "react";
import Clock from "react-live-clock";
import "../App.css";

const LiveClock = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    }
  };

  return (
    <div className="clock-container">
      <h1 className="myClock" onClick={toggleFullScreen}>
        <Clock interval={1000} ticking={true} />
      </h1>
      <h3 className="myDate">
        <Clock format={"D.M.YY"} />
      </h3>
    </div>
  );
};

export default LiveClock;
