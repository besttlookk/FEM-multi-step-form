import Information from "../components/Information";
import AddonCard from "../components/AddonCard";
import data from "../data.json";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import Button from "../components/Button";

function AddonsStep() {
  const { appState, setAppState } = useContext(AppContext);

  const handleBack = () => {
    setAppState({ ...appState, stepNo: "2" });
  };

  const handleNext = () => {
    setAppState({ ...appState, stepNo: "4" });
  };

  return (
    <div className="addonsStep">
      <Information
        heading="Pick add-ons"
        subheading="Add-ons help enhance your gaming experience"
      />

      <div className="addonsStep__cards">
        {data.addons.map((addon) => {
          return <AddonCard addon={addon} key={addon.id} />;
        })}
      </div>

      <div className="addonsStep__buttons">
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

export default AddonsStep;
