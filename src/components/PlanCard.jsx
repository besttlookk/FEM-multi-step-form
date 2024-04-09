import { useContext } from "react";
import PropTypes from "prop-types";
import advancedUrl from "../assets/images/icon-advanced.svg";
import arcdeUrl from "../assets/images/icon-arcade.svg";
import proUrl from "../assets/images/icon-pro.svg";
import { AppContext } from "../contexts/appContext";

function PlanCard({ plan }) {
  const { appState, setAppState } = useContext(AppContext);

  const handleClick = () => {
    setAppState({
      ...appState,
      planName: plan.name,
    });
  };

  return (
    <div
      className={`planCard ${plan.name === appState.planName ? "active" : ""}`}
      onClick={handleClick}
    >
      <img
        src={
          plan.name === "arcade"
            ? arcdeUrl
            : plan.name === "advanced"
            ? advancedUrl
            : proUrl
        }
        alt=""
        className="planCard__icon"
      />

      <div className="planCard__info">
        <p className="planCard__name">
          {plan.name.charAt(0).toUpperCase() + plan.name.slice(1)}
        </p>

        {appState.yearly ? (
          <>
            {" "}
            <p className="planCard__price">${plan.yearly}/yr</p>
            <p className="planCard__offer">2 month free</p>
          </>
        ) : (
          <p className="planCard__price">${plan.monthly}/mo</p>
        )}
      </div>
    </div>
  );
}

export default PlanCard;

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired,
};
