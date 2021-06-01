import React from "react";
import { CaretRight } from "../_icons";

import * as styles from "./skill.module.css";

interface ISkillOwnProps {
  title: string
  listItems: string[]
  image: JSX.Element
}

const Skill: React.FC<ISkillOwnProps> = ({ image, title, listItems }): JSX.Element => {
  return (
    <div className={styles.Skill}>
      {image}
      <div>
        <h3>{title}</h3>
        <ul>
          {listItems.map(item => <SkillTag key={item}>{item}</SkillTag>)}
        </ul>
      </div>
    </div>
  );
}

const SkillTag: React.FC = ({ children }): JSX.Element => {
  return (
    <li>
      <CaretRight />
      {children}
    </li>
  );
}

export default Skill;