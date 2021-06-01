import React from "react";

import * as styles from "./service.module.css";

interface IServiceOwnProps {
  icon: JSX.Element
  title: string
  description: string
}

const Service: React.FC<IServiceOwnProps> = ({ icon, title, description }): JSX.Element => {
  return (
    <div className={styles.Service}>
      <h3>
        <span>{icon}</span>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;