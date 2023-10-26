import React, { useState } from "react";
import classNames from "classnames";
import "./Windmill.css";

const Windmill = ({ speed }) => {
  const windmillClasses = classNames("windmill", {
    slow: speed === "slow",
    medium: speed === "medium",
    fast: speed === "fast",
  });

  return <div className={windmillClasses}></div>;
};

function WD() {
  const [speed, setSpeed] = useState("slow");

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="App">
      <h1>Solar Energy Dashboard</h1>
      <br />
      <div className="controls">
        <button onClick={() => handleSpeedChange("slow")}>Slow</button>
        <button onClick={() => handleSpeedChange("medium")}>Medium</button>
        <button onClick={() => handleSpeedChange("fast")}>Fast</button>
      </div>
      <Windmill speed={speed} />
    </div>
  );
}

export default WD;
