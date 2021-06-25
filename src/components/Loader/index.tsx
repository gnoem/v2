import React, { useContext, useEffect, useState } from "react";

import * as styles from "./loader.module.css";
import { LoadingContext } from "../../contexts";

const Loader: React.FC = (): JSX.Element => {
  const { setLoading, loadingIcon, selfDestruct } = useContext(LoadingContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(selfDestruct, 200);
    }, 3000);
  }, []);
  if (!loadingIcon) return null;
  return (
    <div className={styles.Loader}>
      <LoadingAnimation />
    </div>
  )
}

const LoadingAnimation: React.FC = (): JSX.Element => {
  const radius = 50;
  const circumference = (radius * 2 * Math.PI) + 5;
  const [dashOffset, setDashOffset] = useState<number>(circumference);
  useEffect(() => {
    setTimeout(() => setDashOffset(0), 1);
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} strokeDasharray={circumference} strokeDashoffset={dashOffset} />
    </svg>
  )
}

export default Loader;