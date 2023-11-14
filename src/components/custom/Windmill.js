
import classNames from "classnames";
import PropTypes from 'prop-types';
import "./Windmill.css";

const Windmill = ({ speed }) => {
    const windmillClasses = classNames("windmill", {
        slow: speed === "slow",
        medium: speed === "medium",
        fast: speed === "fast",
    });

    return <div className={windmillClasses}></div>;
};

Windmill.propTypes = {

    speed: PropTypes.string.isRequired

}


export default Windmill;
