import React from "react";
import Footer from "../Footer";
import * as styles from "./content.module.css";

export const Content: React.FC = ({ children }): JSX.Element => {
  return (
    <main className={styles.Content}>
      {children}
      <Footer />
    </main>
  );
}