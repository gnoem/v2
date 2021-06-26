import React from "react";

import * as styles from "./services.module.css";
import { Service } from "@components";
import { servicesOffered } from "@config";

const Services: React.FC = (): JSX.Element => {
  return (
    <ServicesLayout>
      <h2>freelance services</h2>
      <p>I'm currently available for freelance opportunities! If you have a project in mind and are in search of a developer to help you bring it to life, I'd love to hear from you. My approach to web development is collaborative and client-oriented: I will work closely with you to build a website that looks great, works well, and accommodates your specific preferences and needs.</p>
      <ServicesGrid>
        {servicesOffered.map(props => <Service {...props} />)}
      </ServicesGrid>
    </ServicesLayout>
  )
}

const ServicesGrid: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.ServicesGrid}>
      {children}
    </div>
  )
}

const ServicesLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/shroomie_zyvjbo_c_scale,w_2040.svg" alt="page divider with mushroom illustration" />
      <section className={styles.Services}>
        {children}
      </section>
    </>
  )
}

export default Services;