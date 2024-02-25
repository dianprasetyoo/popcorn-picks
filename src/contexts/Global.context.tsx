import {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useState,
  } from "react";
  import * as models from "../models";
  
  /** => INTERFACES */
  type PropValue = {
    cart: models.Cart[];
  };
  
  type PropContext = {
    state: PropValue;
    setState: Dispatch<SetStateAction<PropValue>>;
  };
  
  /** => DEFAULT VALUE */
  const defaultValue: PropValue = {
    cart: [],
  };
  
  /** => CONTEXT */
  const GlobalContext = createContext<PropContext>({
    state: defaultValue,
    setState: () => {},
  });
  
  const GlobalProvider: FC<models.ProviderProps> = ({ children }) => {
    // read if there is local storage data for cart
    const existCartData = localStorage.getItem("cart");
  
    const [state, setState] = useState({
      ...defaultValue,
      cart: existCartData ? JSON.parse(existCartData) : [],
    });
  
    return (
      <GlobalContext.Provider
        value={{
          state,
          setState,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export { GlobalProvider, GlobalContext };
  