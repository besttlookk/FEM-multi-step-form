import Step from "../components/Step";

const StepSection = () => {
  return (
    <section className="stepSection">
      <div className="steps">
        <Step number="1" text="your info" />
        <Step number="2" text="select plan" />
        <Step number="3" text="add-ons" />
        <Step number="4" text="summary" />
      </div>
    </section>
  );
};

export default StepSection;
