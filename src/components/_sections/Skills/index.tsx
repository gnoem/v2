import React from "react";

import * as styles from "./skills.module.css";
import { Skill } from "@components";
import { skillsItems } from "@config";

const Skills: React.FC = (): JSX.Element => {
  return (
    <SkillsLayout>
      <h2>skills</h2>
      <SkillTable>
        {skillsItems.map(props => <Skill {...props} />)}
      </SkillTable>
    </SkillsLayout>
  )
}

const SkillsLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/wavyb.svg" alt="" />
      <section className={styles.Skills}>
        {children}
      </section>
    </>
  )
}

const SkillTable: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.SkillTable}>
      {children}
    </div>
  )
}

export default Skills;