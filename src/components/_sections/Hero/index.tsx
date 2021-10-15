import React, { useContext, useEffect, useState } from "react";

import * as styles from "./hero.module.css";
import { LoadingContext } from "@contexts";

const Hero: React.FC = ({ children }): JSX.Element => {
  const { loading } = useContext(LoadingContext) ?? {};
  return (
    <>
      <HeroText loading={loading}>
        {children}
      </HeroText>
      <HeroImage loading={loading} />
    </>
  )
}

const HeroText: React.FC<{ loading?: boolean }> = ({ children, loading }): JSX.Element => {
  return (
    <div className={`${styles.HeroText} ${loading ? styles.loading : ''}`}>
      <div>
        <img src="/images/icon.svg" alt="" />
        {children}
      </div>
    </div>
  )
}

export const HeroButtons: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.HeroButtons}>
      {children}
    </div>
  )
}

const HeroImage: React.FC<{ loading?: boolean }> = ({ loading }): JSX.Element => {
  const [showFog, setShowFog] = useState<boolean>(loading);
  return (
    <>
      <img data-hero alt="" src="/images/hero/far.svg" className={styles.dist} />
      <img data-hero alt="" src="/images/hero/bgcompressed.svg" className={styles.bg} />
      <img data-hero alt="" src="/images/hero/midcompressed.svg" className={styles.mid} />
      <img data-hero alt="" src="/images/hero/fgcompressed.svg" className={styles.fg} />
      <div className={styles.dim}></div>
      {showFog && <Fog selfDestruct={() => setShowFog(false)} />}
    </>
  )
}

const Fog: React.FC<{ selfDestruct: () => void }> = ({ selfDestruct }): JSX.Element => {
  const [hidden, setHidden] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
      setTimeout(() => {
        selfDestruct();
      }, 2500);
    }, 3500);
  }, []);
  return (
    <div className={`${styles.fog} ${hidden ? styles.hidden : ''}`}></div>
  )
}

export default Hero;