import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import InfoStep from "./InfoStep";
import PlanStep from "./PlanStep";
import AddonsStep from "./AddonsStep";
import SummaryStep from "./SummaryStep";
import ThankYouSection from "./ThankYouSection";

const MainSection = () => {
  const { appState } = useContext(AppContext);
  return (
    <section className="mainSection">
      {appState.isDone ? (
        <ThankYouSection />
      ) : (
        <>
          {appState.stepNo === "1" && <InfoStep />}
          {appState.stepNo === "2" && <PlanStep />}
          {appState.stepNo === "3" && <AddonsStep />}
          {appState.stepNo === "4" && <SummaryStep />}
        </>
      )}
    </section>
  );
};

export default MainSection;
