import React from "react";
import LoadingContextProvider, { LoadingContext } from "./LoadingContext";

const AppContextProvider: React.FC = ({ children }): JSX.Element => {
  return (
    <LoadingContextProvider>
      {children}
    </LoadingContextProvider>
  )
}

export default AppContextProvider;
export { LoadingContext }