import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const Step = ({ number, text }) => {
  const { appState } = useContext(AppContext);
  return (
    <div className="step">
      <div
        className={`step__number ${number === appState.stepNo ? "active" : ""}`}
      >
        {number}
      </div>
      <div className="step__info">
        <p>step {number}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Step;

Step.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
