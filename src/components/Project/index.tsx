import React from "react";

import * as styles from "./project.module.css";
import { useNode, useRevealElement } from "@hooks";
import Description, { Blurb, Links, Tags, Title } from "./Description";
import { IFeaturedProject, IProject } from "@types";

const Project: React.FC<IFeaturedProject> = (props): JSX.Element => {
  const { title, image, blurb, links } = props;
  return props.featured ? <FeaturedProject {...props} /> : <OtherProject {...{ title, image, blurb, links }} />;
}

const FeaturedProject: React.FC<IFeaturedProject> = ({ title, image, blurb, links, tags, wait }): JSX.Element => {
  const [element, ref] = useNode();
  const scaleIn = useRevealElement(element, 'scaleIn');
  return (
    <div className={`${styles.Project} ${scaleIn}`} ref={ref}>
      <Preview {...{ image, title, link: links.primary }} />
      <Description {...{ links, tags }}>
        <Title wait={wait} link={links.primary}>{title}</Title>
        <Links {...{ links }} />
        <Blurb link={links.primary}>{blurb}</Blurb>
        <Tags {...{ tags }} />
      </Description>
    </div>
  )
}

export const OtherProjects: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.OtherProjects}>
      {children}
    </div>
  )
}

const OtherProject: React.FC<IProject> = ({ title, image, blurb, links }): JSX.Element => {
  const [element, ref] = useNode();
  const scaleIn = useRevealElement(element, 'scaleIn');
  return (
    <div ref={ref} className={scaleIn}>
      <Preview {...{ image, title, link: links.primary }} />
      <Description>
        <div>
          <Title link={links.primary}>{title}</Title>
          <Blurb><p>{blurb}</p></Blurb>
        </div>
        <a href={links.primary}>&raquo; View live</a>
      </Description>
    </div>
  )
}

const Preview: React.FC<{ image: string; link: string; title: string; }> = ({ image, link, title }): JSX.Element => {
  return (
    <div className={styles.preview}>
      <a href={link}>
        <img src={image} alt={`${title} preview`} />
      </a>
    </div>
  )
}

export default Project;