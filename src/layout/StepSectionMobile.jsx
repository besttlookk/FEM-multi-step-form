import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

const StepSectionMobile = () => {
  const { appState } = useContext(AppContext);
  return (
    <div className="ssm">
      <ul>
        <li className={appState.stepNo === "1" ? "active" : ""}>1</li>
        <li className={appState.stepNo === "2" ? "active" : ""}>2</li>
        <li className={appState.stepNo === "3" ? "active" : ""}>3</li>
        <li className={appState.stepNo === "4" ? "active" : ""}>4</li>
      </ul>
    </div>
  );
};

export default StepSectionMobile;
