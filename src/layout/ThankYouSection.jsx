import iconUrl from "../assets/images/icon-thank-you.svg";
const ThankYouSection = () => {
  return (
    <div className="thankYouSection">
      <img src={iconUrl} alt="" />
      <p className="thankYouSection__title">Thank you!</p>
      <p>
        Thanks for confirming your subscribtion! We hope you have fun using
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYouSection;
