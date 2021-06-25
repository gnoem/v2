import React from "react";

import * as styles from "./projects.module.css";
import { Clock } from "../../_icons";
import Project, { OtherProjects } from "../../Project";
import { IFeaturedProject } from "@types";

const projectsList: IFeaturedProject[] = [{
  title: 'Habitat',
  image: '/images/portfolio/habitat.png',
  blurb: "My most recent project, a digital habit tracker. Definitely the coolest thing I've made so far!",
  links: {
    primary: 'https://habi.vercel.app/?demo',
    github: 'https://github.com/gnoem/habitat'
  },
  tags: ['Next.js', 'GraphQL', 'Apollo', 'PostgreSQL', 'Prisma', 'Chart.js'],
  featured: true
}, {
  title: 'Dragonfly',
  image: '/images/portfolio/dragonfly.png',
  blurb: "A simple web app for composing, editing, and organizing rich text notes.",
  links: {
    primary: 'https://ngwdragonfly.herokuapp.com',
    github: 'https://github.com/gnoem/dragonfly'
  },
  tags: ['Node.js', 'Express', 'React', 'MongoDB', 'Draft.js'],
  featured: true,
  wait: true,
}, {
  title: 'Pianopet',
  image: '/images/portfolio/pianopet.png',
  blurb: "Part homework tracker, part virtual pet dress-up game! Built for a music teacher friend of mine.",
  links: {
    primary: 'https://pianopet.herokuapp.com/demo',
    github: 'https://github.com/gnoem/Pianopet'
  },
  tags: ['Node.js', 'Express', 'React', 'MongoDB'],
  featured: true,
  wait: true
}, {
  title: 'TALAS',
  image: '/images/portfolio/talas.png',
  blurb: "Wordpress-based homepage for the Texas Association of Latino Administrators and Superintendents. I built this theme from scratch with HTML, CSS, JavaScript, and PHP.",
  links: {
    primary: 'https://www.talasedu.org'
  },
  tags: ['HTML', '(S)CSS', 'JavaScript', 'PHP', 'Wordpress'],
  featured: false
}, {
  title: 'Rooting For You',
  image: '/images/portfolio/rfy.png',
  blurb: "Wordpress-based homepage for a friend's wellness blog. I built this theme from scratch with HTML, CSS, JavaScript, and PHP.",
  links: {
    primary: 'https://www.mymamajo.com'
  },
  tags: ['HTML', '(S)CSS', 'JavaScript', 'PHP', 'Wordpress'],
  featured: false
}];

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
  );
}

const ProjectsLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/wavyb.svg" alt="" />
      <section className={styles.Projects}>
        {children}
      </section>
    </>
  );
}

export default Projects;