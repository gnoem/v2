import React, { useContext, useEffect } from "react";

import * as styles from "./homepage.module.css";
import { Head } from "@components";
import { LoadingContext } from "@contexts";

const Homepage: React.FC<{ noscroll?: boolean; title?: string; }> = ({ children, noscroll, title }): JSX.Element => {
  const { loading } = useContext(LoadingContext) ?? {};
  useEffect(() => {
    if (noscroll) {
      const container = document.querySelector<HTMLElement>('[class*=-container-]');
      container.style.overflowY = 'hidden';
    }
  }, [noscroll]);
  return (
    <>
      <Head title={title} />
      <main className={`${styles.container} ${loading ? styles.loading : ''}`}>
        {children}
      </main>
    </>
  );
}

export default Homepage;