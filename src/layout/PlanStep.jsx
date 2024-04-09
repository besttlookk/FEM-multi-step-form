import { useContext } from "react";
import Information from "../components/Information";
import PlanCard from "../components/PlanCard";
import Toggle from "../components/Toggle";
import { AppContext } from "../contexts/appContext";

import data from "../data.json";
import Button from "../components/Button";

function PlanStep() {
  const { appState, setAppState } = useContext(AppContext);

  const handleBack = () => {
    setAppState({ ...appState, stepNo: "1" });
  };

  const handleNext = () => {
    setAppState({ ...appState, stepNo: "3" });
  };
  return (
    <div className="planStep">
      <Information
        heading="Select your plan"
        subheading="You have the option of monthly or yearly billing"
      />

      <div className="planStep__cards">
        {data.plans.map((plan) => {
          return <PlanCard plan={plan} key={plan.id} />;
        })}
      </div>

      <div className="planStep__option">
        <p className={appState.yearly === false ? "active" : ""}>Monthly</p>
        <Toggle />
        <p className={appState.yearly === true ? "active" : ""}>Yearly</p>
      </div>

      <div className="planStep__buttons">
        <button className="backBtn" type="button" onClick={handleBack}>
          Go Back
        </button>
        <Button
          type="button"
          className="btn btn__next"
          text="Next Step"
          handleClick={handleNext}
        />
      </div>
    </div>
  );
}

export default PlanStep;
