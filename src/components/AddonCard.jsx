import PropTypes from "prop-types";
import checkIconUrl from "../assets/images/icon-checkmark.svg";
import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

function AddonCard({ addon }) {
  const { appState, setAppState } = useContext(AppContext);

  let cardClass = "";

  if (appState.addOns.includes(addon.id)) cardClass = "active";
  else cardClass = "";

  const handleClick = () => {
    if (appState.addOns.includes(addon.id)) {
      setAppState({
        ...appState,
        addOns: appState.addOns.filter((item) => {
          return item !== addon.id;
        }),
      });
    } else {
      setAppState({ ...appState, addOns: [...appState.addOns, addon.id] });
    }
  };

  return (
    <div className={`addonCard ${cardClass}`} onClick={handleClick}>
      <div className={`addonCard__checkbox ${cardClass}`}>
        {cardClass === "active" ? <img src={checkIconUrl} alt="" /> : <></>}
      </div>
      <div className="addonCard__info">
        <p>{addon.name}</p>
        <p>{addon.detail}</p>
      </div>
      {appState.yearly ? (
        <div className="addonCard__price">+${addon.yearly}/yr</div>
      ) : (
        <div className="addonCard__price">+${addon.monthly}/mo</div>
      )}
    </div>
  );
}

export default AddonCard;

AddonCard.propTypes = {
  addon: PropTypes.object.isRequired,
};
