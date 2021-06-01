import React from "react";
import Service from "../../Service";
import { Code, Magic, Palette } from "../../_icons";

import * as styles from "./services.module.css";

const servicesOffered = [
  { icon: <Palette />, title: 'Web Design', description: "I'll draw up a website design that suits your needs well and creates an excellent first impression. You'll get a clean, attractive design that combines your organization's aesthetic with a simple, clear, and consistent user interface." },
  { icon: <Code />, title: 'Web Development', description: "I'll build you a functional, responsive website from the ground up. If you have a design ready to go, I'll bring it to life with pixel-perfect accuracy; if not, we can work together to create a design that works for you." },
  { icon: <Magic />, title: 'Digital Marketing', description: "Take your brand to the next level! I'll work with you to develop a unique brand identity and a strong digital presence for your organization. This service is comprehensive and includes art direction, iconography, web design, and SEO." }
]

const Services: React.FC = (): JSX.Element => {
  return (
    <ServicesLayout>
      <h2>freelance services</h2>
      <p>I'm currently available for freelance opportunities! If you have a project in mind and are in search of a developer to help you bring it to life, I'd love to hear from you. My approach to web development is collaborative and client-oriented: I will work closely with you to build a website that looks great, works well, and accommodates your specific preferences and needs.</p>
      <ServicesGrid>
        {servicesOffered.map(props => <Service {...props} />)}
      </ServicesGrid>
    </ServicesLayout>
  );
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
  );
}

export default Services;