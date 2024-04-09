import StepSection from "./layout/StepSection";
import MainSection from "./layout/MainSection";
import StepSectionMobile from "./layout/StepSectionMobile";

function App() {
  return (
    <>
      <main>
        <StepSectionMobile />
        <StepSection />
        <MainSection />
      </main>
    </>
  );
}

export default App;
