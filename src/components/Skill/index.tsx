import React, { useCallback, useState } from "react";

import * as styles from "./skill.module.css";
import { useRevealElement } from "../../hooks";
import { CaretRight } from "../_icons";

interface ISkillProps {
  title: string
  listItems: string[]
  image: JSX.Element
}

const Skill: React.FC<ISkillProps> = ({ image, title, listItems }): JSX.Element => {
  const [element, setElement] = useState<HTMLElement | undefined>(null);
  const ref = useCallback(node => {
    if (node) setElement(node);
  }, []);
  const slideIn = useRevealElement(element, 'slideIn');
  return (
    <div className={`${styles.Skill} ${slideIn}`} ref={ref}>
      {image}
      <div>
        <h3>{title}</h3>
        <ul>
          {listItems.map(item => <SkillTag key={item}>{item}</SkillTag>)}
        </ul>
      </div>
    </div>
  )
}

const SkillTag: React.FC = ({ children }): JSX.Element => {
  return (
    <li>
      <CaretRight />
      {children}
    </li>
  )
}

export default Skill;