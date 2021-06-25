import React, { useCallback, useState } from "react";

import * as styles from "./service.module.css";
import { useRevealElement } from "../../hooks";

interface IServiceOwnProps {
  icon: JSX.Element
  title: string
  description: string
}

const Service: React.FC<IServiceOwnProps> = ({ icon, title, description }): JSX.Element => {
  const [element, setElement] = useState<HTMLElement | undefined>(null);
  const ref = useCallback(node => {
    if (node) setElement(node);
  }, []);
  const scaleIn = useRevealElement(element, 'scaleIn');
  return (
    <div className={`${styles.Service} ${scaleIn}`} ref={ref}>
      <h3>
        <span>{icon}</span>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  )
}

export default Service;