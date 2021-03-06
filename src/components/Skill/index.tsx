import React from "react";

import * as styles from "./skill.module.css";
import { useNode, useRevealElement } from "@hooks";
import { CaretRight } from "@components/_icons";
import { ISkill } from "@types";

const Skill: React.FC<ISkill> = ({ image, title, listItems }): JSX.Element => {
  const [element, ref] = useNode();
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