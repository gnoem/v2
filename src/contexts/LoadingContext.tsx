import React, { useState } from "react";

export const LoadingContext = React.createContext(null);

const LoadingContextProvider: React.FC = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingIcon, setLoadingIcon] = useState<boolean>(true);
  const selfDestruct = () => setLoadingIcon(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading, loadingIcon, selfDestruct }}>
      {children}
    </LoadingContext.Provider>
  )
}

export default LoadingContextProvider;