import React, { useCallback, useState } from "react";

import * as styles from "./project.module.css";
import { useRevealElement } from "../../hooks";
import Description, { Blurb, Links, Tags, Title } from "./Description";

interface IProjectProps {
  title: string;
  image: string;
  blurb: string;
  links: {
    primary?: string;
    github?: string;
  };
  tags: string[];
  featured?: boolean;
  wait?: boolean;
}

const Project: React.FC<IProjectProps> = (props): JSX.Element => {
  const { title, image, blurb, links } = props;
  return props.featured ? <FeaturedProject {...props} /> : <OtherProject {...{ title, image, blurb, links }} />;
}

const FeaturedProject: React.FC<IProjectProps> = ({ title, image, blurb, links, tags, wait }): JSX.Element => {
  const [element, setElement] = useState<HTMLElement | undefined>(null);
  const ref = useCallback(node => {
    if (node) setElement(node);
  }, []);
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

interface IOtherProjectProps {
  title: string;
  image: string;
  blurb: string;
  links: {
    primary?: string;
    github?: string;
  }
}

export const OtherProjects: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.OtherProjects}>
      {children}
    </div>
  )
}

const OtherProject: React.FC<IOtherProjectProps> = ({ title, image, blurb, links }): JSX.Element => {
  const [element, setElement] = useState<HTMLElement | undefined>(null);
  const ref = useCallback(node => {
    if (node) setElement(node);
  }, []);
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