// WD2.jsx
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Windmill2.css";
import torreImage from "./genetic-data-svgrepo-com.svg";

const RotatingImage = ({ speed }) => {
  const rotateImagesClasses = classNames("rotateImage", {
    slow: speed === "slow",
    medium: speed === "medium",
    fast: speed === "fast",
  });

  return <img className={rotateImagesClasses} src={torreImage} alt="Torre" />;
};

const WD2 = ({ newSpeed, torre }) => {
  const [speed, setSpeed] = useState(newSpeed);

  const handleSpeedChange = (newUserSpeed) => {
    setSpeed(newUserSpeed);
  };

  return (
    <div className="App">
      <h1>Solar Energy {torre}</h1>
      <br />
      <div className="controls">
        <button onClick={() => handleSpeedChange("slow")}>Slow</button>
        <button onClick={() => handleSpeedChange("medium")}>Medium</button>
        <button onClick={() => handleSpeedChange("fast")}>Fast</button>
      </div>
      <div className="windmill-container">
        <RotatingImage speed={speed} />
      </div>
    </div>
  );
};

WD2.propTypes = {
  newSpeed: PropTypes.string.isRequired,
  torre: PropTypes.string.isRequired,
};

export default WD2;
