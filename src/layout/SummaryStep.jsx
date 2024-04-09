import { useContext } from "react";
import Information from "../components/Information";
import { AppContext } from "../contexts/appContext";
import data from "../data.json";
import Button from "../components/Button";

const SummaryStep = () => {
  const { appState, setAppState } = useContext(AppContext);

  const planTerm = appState.yearly ? "Yearly" : "Monthly";

  const plan = data.plans.filter((item) => item.name === appState.planName);

  const planName = plan[0].name.charAt(0).toUpperCase() + plan[0].name.slice(1);

  const planPrice =
    planTerm === "Yearly" ? `${plan[0].yearly}` : `${plan[0].monthly}`;

  const addOns = data.addons.filter((addon) =>
    appState.addOns.includes(addon.id)
  );

  let addonPrice = 0;

  addOns?.forEach((addOn) => {
    if (planTerm === "Yearly") {
      addonPrice = addonPrice + Number(addOn.yearly);
    } else {
      addonPrice = addonPrice + Number(addOn.monthly);
    }
  });

  let total = +planPrice + addonPrice;

  const handleBack = () => {
    setAppState({ ...appState, stepNo: "3" });
  };

  const handleNext = () => {
    setAppState({ ...appState, isDone: true });
  };

  return (
    <div className="summaryStep">
      <Information
        heading="Finishing up"
        subheading="Double-check everything looks OK before confirming."
      />

      <div className="summary">
        <div className="summary__display">
          <div className="summary__top">
            <div className="summary__top__left">
              <p>
                {planName}({planTerm})
              </p>
              {/* <Link to="/selectplan">Change</Link> */}
            </div>

            <div className="summary__top__right">
              ${planPrice}/{planTerm === "Yearly" ? "yr" : "mo"}
            </div>
          </div>

          <div className="summary__bottom">
            {addOns?.map((addOn) => {
              return (
                <div className="addOn_item" key={addOn.id}>
                  <p>{addOn.name}</p>
                  {planTerm === "Yearly" ? (
                    <p>+{addOn.yearly}/yr</p>
                  ) : (
                    <p>+{addOn.monthly}/mo</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="summary__total">
          <p>Total(per {planTerm === "Yearly" ? "year" : "month"})</p>
          <p>
            +${total}/{planTerm === "Yearly" ? "yr" : "mo"}
          </p>
        </div>
      </div>

      <div className="summaryStep__buttons">
        <button className="backBtn" type="button" onClick={handleBack}>
          Go Back
        </button>
        <Button
          type="button"
          className="btn btn__confirm"
          text="Confirm"
          handleClick={handleNext}
        />
      </div>
    </div>
  );
};

export default SummaryStep;
