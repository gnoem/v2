import React from "react";

import * as styles from "./intro.module.css";

const Intro: React.FC = (): JSX.Element => {
  return (
    <section className={styles.Intro}>
      <h2>hey there!</h2>
      <Bio>
        <p>I'm Naomi, an artist and web developer from the Bay Area, CA. I've been building websites since the fourth grade, and in that time I've worked hard to refine my skills and embark on more and more complex projects.</p>
        <p>I've worked extensively with HTML, CSS, and JavaScript, and lately I've been diving deep into web app development with Node.js and React. I code primarily for fun, to challenge myself, and to master new and exciting technologies, but I'm deeply interested in using tech to benefit people and am eager to start getting involved in projects that have purpose, meaning, and potential.</p>
      </Bio>
    </section>
  )
}

const Bio: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.bio}>
      <img alt="me as my animal crossing character" src="/images/me.svg" />
      <div>{children}</div>
    </div>
  )
}

export default Intro;