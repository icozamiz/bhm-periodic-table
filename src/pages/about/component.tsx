import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";

import "./styles.scss";

export interface IAboutPageProps extends RouteComponentProps {}

export const AboutPage = (_: IAboutPageProps) => {
  return (
    <Box className="about-page">
      <h1>About</h1>
      <h2>The Idea</h2>
      <p>
        Inspired by a similar project from a US school library, the original
        Periodic Table of Canadian Black History was created in 2020 by a
        Parents for Diversity Board member and displayed in an Ottawa primary
        school. The templates and tools for creating the Periodic Table of
        Canadian Black History were shared on the Parents for Diversity website,
        and soon we saw schools across Ontario and as far away as Vancouver
        creating their own Periodic Tables! As demonstrated by{" "}
        <a href="https://www.youtube.com/watch?v=GKm7wQjpuac&feature=emb_title">
          #BlackedOutHistory
        </a>{" "}
        from the{" "}
        <a href="https://blackhistorysociety.ca/">
          Ontario Black History Society,
        </a>{" "}
        the contributions and achievements of Black Canadians are often excluded
        from textbooks and curriculum. The Periodic Table of Canadian Black
        History is a tool that educators, students, and families can use to
        explore and celebrate the stories, voices, and accomplishments of Black
        Canadians.
      </p>
      {/* <h2>The Execution</h2>
      <p>P4D</p>
      <h2>The Impact</h2>
      <p>P4D</p> */}
    </Box>
  );
};
