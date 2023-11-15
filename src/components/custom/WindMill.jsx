import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Windmill.css";
import torreImage from "../../../public/torre.png";

const Windmill = ({ speed }) => {
  const windmillClasses = classNames("windmill", {
    slow: speed === "slow",
    medium: speed === "medium",
    fast: speed === "fast",
  });

  return <div className={windmillClasses}></div>;
};

const WD = ({ newSpeed, torre }) => {
  const [speed, setSpeed] = useState(newSpeed);

  const handleSpeedChange = (newUserSpeed) => {
    setSpeed(newUserSpeed);
  };

  return (
    <div className="App">
      <h1>Solar Energy Dashboard {torre}</h1>
      <br />
      <div className="controls">
        <button onClick={() => handleSpeedChange("slow")}>Slow</button>
        <button onClick={() => handleSpeedChange("medium")}>Medium</button>
        <button onClick={() => handleSpeedChange("fast")}>Fast</button>
      </div>
      <div className="windmill-container">
        <img className="testImg" src={torreImage} />
        <Windmill speed={speed} />
      </div>
    </div>
  );
};

WD.propTypes = {
  newSpeed: PropTypes.string.isRequired,
  torre: PropTypes.string.isRequired,
};

Windmill.propTypes = {
  speed: PropTypes.string.isRequired,
};

export default WD;
