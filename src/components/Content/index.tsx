import React from "react";

import * as styles from "./content.module.css";
import { Footer } from "@components";

const Content: React.FC = ({ children }): JSX.Element => {
  return (
    <main className={styles.Content}>
      {children}
      <Footer />
    </main>
  )
}

export default Content;