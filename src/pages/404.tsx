import * as React from "react";

import { Homepage } from "@components/_layouts";
import { ArrowLeft } from "@components/_icons";
import { Hero } from "@components/_sections";

const NotFoundPage: React.FC = (): JSX.Element => {
  return (
    <Homepage noscroll title="page not found!">
      <Hero>
        <h1>Not found!</h1>
        <p>The page you're looking for doesn't exist on this server.</p>
        <a href="/" aria-label="go to homepage"><ArrowLeft style={{ height: '3rem' }} color="#8BA7F7" /></a>
      </Hero>
    </Homepage>
  )
}

export default NotFoundPage;