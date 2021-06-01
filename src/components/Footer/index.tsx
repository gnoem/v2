import React from "react";

import * as styles from "./footer.module.css";
import { Seedling } from "../_icons";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className={styles.Footer}>
      <span>
        Designed, illustrated, &amp; coded by Naomi G.W.
        <Seedling />
      </span>
    </div>
  );
}

export default Footer;