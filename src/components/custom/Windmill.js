import React from "react";
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

export default Windmill;
