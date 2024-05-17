import React, { useState } from "react";
import Clock from "react-live-clock";
import { HexColorPicker } from "react-colorful";
import "../App.css";

const LiveClock = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#FF0000");

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

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
    <>
      {showColorPicker && (
        <div className="color-picker no-background">
          <HexColorPicker
            color={color}
            onChange={setColor}
            className="colorPicker no-background"
          />
        </div>
      )}
      <div className="clock-container">
        <h1
          className="myClock"
          style={{ color: color }}
          onClick={toggleColorPicker}
        >
          <Clock interval={1000} ticking={true} />
        </h1>
        <h3
          className="myDate"
          style={{ color: color }}
          onClick={toggleFullScreen}
        >
          <Clock format={"D.M.YY"} />
        </h3>
      </div>
    </>
  );
};

export default LiveClock;
