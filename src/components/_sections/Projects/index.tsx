import React from "react";

import * as styles from "./projects.module.css";
import { Clock } from "@components/_icons";
import Project, { OtherProjects } from "@components/Project";
import { projectsList } from "@config";

const Projects: React.FC = (): JSX.Element => {
  const featuredProjects = projectsList.filter(project => project.featured);
  const otherProjects = projectsList.filter(project => !project.featured);
  return (
    <ProjectsLayout>
      <h2>portfolio</h2>
      <div className={styles.projectNote}>
        <b>Some notes:</b>
        <ul>
          <li>Projects labeled with a <Clock /> symbol are hosted on Heroku's free tier and may initially take up to 30 seconds to load depending on how much traffic they've gotten in the last half hour. Thanks for your patience!</li>
          <li>Credit to <a href="https://brittanychiang.com/">Brittany Chiang</a> for providing the layout inspiration for this section!</li>
        </ul>
      </div>
      <h3>Featured projects</h3>
      <div>
        {featuredProjects.map(project => <Project {...project} />)}
      </div>
      <h3>Other stuff</h3>
      <OtherProjects>
        {otherProjects.map(project => <Project {...project} />)}
      </OtherProjects>
    </ProjectsLayout>
  )
}

const ProjectsLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/wavyb.svg" alt="" />
      <section className={styles.Projects}>
        {children}
      </section>
    </>
  )
}

export default Projects;