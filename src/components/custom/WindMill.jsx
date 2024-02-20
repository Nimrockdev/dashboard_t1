import { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Windmill.css";

//import torreImage from "../../../public/torre.png";
//import torreImage from "/public/torre.png";
//const torreImage = `${import.meta.env.BASE_URL}torre.png`;
const torreImage = `./assets/torre.png`;

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
      <h1>
        <b>Wind Energy {torre}</b>
      </h1>
      <br />
      <div className="controls">
        <btn onClick={() => handleSpeedChange("slow")}>Slow</btn>
        <btn onClick={() => handleSpeedChange("medium")}>Medium</btn>
        <btn onClick={() => handleSpeedChange("fast")}>Fast</btn>
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
