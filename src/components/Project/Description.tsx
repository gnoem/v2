import React from "react";

import * as styles from "./project.module.css";
import { Clock, ExternalLink, Github } from "@components/_icons";

const Description: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.description}>
      {children}
    </div>
  )
}

export const Title: React.FC<{ link: string; wait?: boolean; }> = ({ children, link, wait }): JSX.Element => {
  return (
    <h4>
      {wait && <Clock />}
      <a href={link}>{children}</a>
    </h4>
  )
}

export const Blurb: React.FC<{ link?: string }> = ({ children, link }): JSX.Element => {
  return (
    <div className={styles.blurb}>
      {children} {' '}
      {link && <a href={link}>&raquo; View live</a>}
    </div>
  )
}

interface ILinksOwnProps {
  links: {
    primary?: string;
    github?: string;
  }
}

export const Links: React.FC<ILinksOwnProps> = ({ links }): JSX.Element => {
  if (Object.keys(links).length === 0) return;
  return (
    <div className={styles.links}>
      {links.github && <a href={links.github} aria-label="Github repository"><Github /></a>}
      {links.primary && <a href={links.primary} aria-label="Live site"><ExternalLink /></a>}
    </div>
  )
}

export const Tags: React.FC<{ tags: string[] }> = ({ tags }): JSX.Element => {
  return (
    <ul>
      {tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  )
}

export default Description;