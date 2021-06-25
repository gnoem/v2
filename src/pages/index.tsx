import React, { useEffect } from "react";

import "@styles/globals.css";
import { Icons, Layouts, Sections, Content, Loader } from "@components";
import { HeroButtons } from "@components/_sections/Hero";
import AppContextProvider from "@contexts";

const Home: React.FC = (): JSX.Element => {
  useEffect(() => {
    const fixLinks = () => {
      const links = Array.from(document.querySelectorAll('a'));
      links.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
    fixLinks();
  }, []);
  return (
    <AppContextProvider>
      <Layouts.Homepage>
        <Sections.Hero>
          <h1>Hi, I'm Naomi!</h1>
          <p>I'm a designer and developer who specializes in building beautiful, interactive websites and web apps.</p>
          <HeroButtons>
            <a href="https://github.com/gnoem" aria-label="Github"><Icons.Github /></a>
            <a href="https://codepen.io/gnomey" aria-label="Codepen"><Icons.Codepen /></a>
            <a href="mailto:contact@ngw.dev" aria-label="Email"><Icons.Envelope /></a>
          </HeroButtons>
        </Sections.Hero>
        <Content>
          <Sections.Intro />
          <Sections.Services />
          <Sections.Skills />
          <Sections.Projects />
          <Sections.Contact />
        </Content>
      </Layouts.Homepage>
      <Loader />
    </AppContextProvider>
  )
}

export default Home;