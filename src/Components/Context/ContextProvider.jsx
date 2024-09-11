import React from "react";
import {createContext} from "react";

export const HuzaAppContext = createContext(null);
const ContextProvider = () => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  function ShowMore() {
    // setShow(true);
  }
  const value = { open, setOpen, ShowMore, show };
  return (
    <HuzaAppContext.Provider value={{ value }}>
      <ShowMore />      
    </HuzaAppContext.Provider>
  );
};

export default ContextProvider;
