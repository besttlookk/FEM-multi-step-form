import { useContext, useState } from "react";
import { AppContext } from "../contexts/appContext";

function Toggle() {
  const { appState, setAppState } = useContext(AppContext);
  const [checked, setChecked] = useState(appState.yearly);

  const handleClick = () => {
    setAppState({
      ...appState,
      yearly: !appState.yearly,
    });

    console.log(appState);
  };

  const handleChange = () => {
    setChecked(appState.yearly);
  };

  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        className="toggle__input"
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor="toggle"
        className="toggle__label"
        onClick={handleClick}
      ></label>
    </>
  );
}

export default Toggle;
