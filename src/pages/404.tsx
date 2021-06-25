import * as React from "react";

import { Layouts, Icons, Sections } from "@components";

const NotFoundPage: React.FC = (): JSX.Element => {
  return (
    <Layouts.Homepage noscroll title="page not found!">
      <Sections.Hero>
        <h1>Not found!</h1>
        <p>The page you're looking for doesn't exist on this server.</p>
        <a href="/" aria-label="go to homepage"><Icons.ArrowLeft style={{ height: '3rem' }} color="#8BA7F7" /></a>
      </Sections.Hero>
    </Layouts.Homepage>
  )
}

export default NotFoundPage;