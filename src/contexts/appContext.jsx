import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    planName: "arcade",
    yearly: false,
    addOns: [],
    stepNo: "1",
    isDone: false,
  });

  const values = { appState, setAppState };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node,
};
