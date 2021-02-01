import { Box } from "@material-ui/core";
import "./styles.scss";
import clsx from "clsx";

export interface IAboutBadgeProps {
  className: string;
}

export const AboutBadge = ({ className }: IAboutBadgeProps) => {
  return (
    <Box className={clsx(className, "about-badge")}>
      <span>This</span>{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/icozamiz/bhm-periodic-table"
      >
        project
      </a>{" "}
      <span>was created by</span>{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/isabela-ozamiz-68458a67/"
      >
        Isabela Ozamiz
      </a>{" "}
      and{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/nicholas-simard-6a41a2129/"
      >
        Nicholas Simard
      </a>{" "}
      <span> using data from</span>{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.parentsfordiversity.com/post/is-your-school-ready-for-black-history-month"
      >
        Parents for Diversity
      </a>{" "}
      <span>in co-operation with</span>{" "}
      <a target="_blank" rel="noreferrer" href="https://twitter.com/MrOzamiz">
        Mr. Ozamiz
      </a>{" "}
      and{" "}
      <a target="_blank" rel="noreferrer" href="https://twitter.com/lemjen22">
        Ms. Lemon
      </a>
      <span>; teachers in Ottawa, ON, Canada.</span>
    </Box>
  );
};
