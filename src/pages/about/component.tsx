import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { aboutEn } from "./about-data";

import "./styles.scss";

export interface IAboutPageProps extends RouteComponentProps {
  language: string;
}

export const AboutPage = ({ language }: IAboutPageProps) => {
  const lang = language === "french" ? aboutEn : aboutEn;
  const {
    title,
    subtitle,
    contentStart,
    contentJoin,
    link1,
    link2,
    contentEnd,
  } = lang;
  return (
    <Box className="about-page">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>
        {contentStart}{" "}
        <a href="https://www.youtube.com/watch?v=GKm7wQjpuac&feature=emb_title">
          {link1}
        </a>{" "}
        {contentJoin} <a href="https://blackhistorysociety.ca/">{link2}</a>{" "}
        {contentEnd}
      </p>
      {/* <h2>The Execution</h2>
      <p>P4D</p>
      <h2>The Impact</h2>
      <p>P4D</p> */}
    </Box>
  );
};
