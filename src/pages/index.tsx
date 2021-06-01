import React from "react";

import "../styles/globals.css";
import { Codepen, Envelope, Github } from "../components/_icons";
import Homepage from "../components/_layouts/Homepage";
import { Hero, Intro, Services, Skills, Projects, Contact } from "../components/_sections";
import { HeroButtons } from "../components/_sections/Hero";
import { Content } from "../components/Content";
import Loader from "../components/Loader";
import AppContextProvider from "../contexts";

const Home: React.FC = (): JSX.Element => {
  return (
    <AppContextProvider>
      <Homepage>
        <Hero>
          <h1>Hi, I'm Naomi!</h1>
          <p>I'm a designer and developer who specializes in building beautiful, interactive websites and web apps.</p>
          <HeroButtons>
            <a href="https://github.com/gnoem" aria-label="Github"><Github /></a>
            <a href="https://codepen.io/gnomey" aria-label="Codepen"><Codepen /></a>
            <a href="mailto:contact@ngw.dev" aria-label="Email"><Envelope /></a>
          </HeroButtons>
        </Hero>
        <Content>
          <Intro />
          <Services />
          <Skills />
          <Projects />
          <Contact />
        </Content>
      </Homepage>
      <Loader />
    </AppContextProvider>
  );
}

export default Home;