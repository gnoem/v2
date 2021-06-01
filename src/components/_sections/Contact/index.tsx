import React from "react";

import * as styles from "./contact.module.css";

const Contact: React.FC = (): JSX.Element => {
  return (
    <ContactLayout>
      <h2>get in touch</h2>
      <p>I'm open to freelance opportunities, especially projects that are weird, unorthodox, or interesting. Drop me a line:</p>
      <a href="mailto:contact@ngw.dev">contact@ngw.dev</a>
      <p>Hope to hear from you soon!</p>
    </ContactLayout>
  );
}

const ContactLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <img className={`wavy ${styles.wavy}`} src="/images/layout/wavyp.svg" alt="" />
      <section className={styles.Contact}>
        <div>
          {children}
        </div>
        <img className={`${styles.footer} ${styles.left}`}id="footer1" src="/images/layout/footer1.svg" alt="illustration of strange, alien-looking plants" />
        <img className={`${styles.footer} ${styles.right}`} id="footer2" src="/images/layout/footer2.svg" alt="illustration of strange, alien-looking plants" />
      </section>
    </>
  );
}

export default Contact;