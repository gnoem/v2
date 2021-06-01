import React from "react";

import * as styles from "./skills.module.css";
import Skill from "../../Skill";

const skillsItems = [{
  title: 'coding languages',
  listItems: ['HTML', 'CSS/Sass', 'JavaScript (ES6+)', 'PHP', 'GraphQL'],
  image: <img src="/images/layout/lilypad1.svg" alt="" />
}, {
  title: 'libraries & frameworks',
  listItems: ['Node.js', 'Express', 'React', 'Next.js', 'Gatsby', 'Bootstrap', 'jQuery'],
  image: <img src="/images/layout/lilypad2.svg" alt="" />
}, {
  title: 'dbs, tools, & platforms',
  listItems: ['MongoDB', 'MySQL', 'PostgreSQL', 'Git', 'Photoshop', 'Illustrator', 'Wordpress', 'Heroku', 'Vercel', 'Netlify'],
  image: <img src="/images/layout/lilypad3.svg" alt="" />
}];

const Skills: React.FC = (): JSX.Element => {
  return (
    <SkillsLayout>
      <h2>skills</h2>
      <SkillTable>
        {skillsItems.map(props => <Skill {...props} />)}
      </SkillTable>
    </SkillsLayout>
  );
}

const SkillsLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/wavyb.svg" alt="" />
      <section className={styles.Skills}>
        {children}
      </section>
    </>
  );
}

const SkillTable: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.SkillTable}>
      {children}
    </div>
  );
}

export default Skills;