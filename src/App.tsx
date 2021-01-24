import React, { useState } from "react";
import "./App.scss";
import { Box } from "@material-ui/core";
import { PeriodicTable, Legend } from "./components";
import { ICategory } from "./types";
import { useWindowSize } from "./hooks/useWindowSize";
import { useDeviceTypes } from "./hooks/useDeviceTypes";
import { CategoryTable } from "./components/category-table";

const setViewWidthAndHeight = (width: string, height: string) => {
  document.body.style.setProperty(`--vw`, width);
  document.body.style.setProperty(`--vh`, height);
};
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const windowSize = useWindowSize();
  const { matchesDesktop } = useDeviceTypes();

  // Add a variable for vh to use for specifying full-screen height
  // 100vh does not work properly on iOS. https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  setViewWidthAndHeight(
    `${windowSize.width * 0.01}px`,
    `${windowSize.height * 0.01}px`
  );
  const containerClass = matchesDesktop
    ? "bhm-periodic-table-app desktop"
    : "bhm-periodic-table-app";
  return (
    <Box className={containerClass}>
      <h1 className="bhm-title">Periodic Table of Canadian Black History</h1>
      {matchesDesktop ? (
        <Box className="bhm-periodic-table-container">
          <PeriodicTable
            onCategoryHovered={(category) => setSelectedCategory(category)}
          ></PeriodicTable>
          <Box className="legend-container">
            <Legend
              selectedCategory={selectedCategory}
              onCategorySelected={(category: ICategory) =>
                setSelectedCategory(category.id)
              }
            />
          </Box>
        </Box>
      ) : (
        <CategoryTable></CategoryTable>
      )}
      <Box className="bhm-description">
        <span>This</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/icozamiz/bhm-periodic-table"
        >
          project
        </a>
        <span>was created by</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/isabela-ozamiz-68458a67/"
        >
          Isabela Ozamiz
        </a>
        <span> using data from</span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.parentsfordiversity.com/post/is-your-school-ready-for-black-history-month"
        >
          Parents for Diversity
        </a>
        <span>in co-operation with</span>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/MrOzamiz">
          Mr. Ozamiz
        </a>
        <span>a teacher in Ottawa, ON, Canada.</span>
      </Box>
    </Box>
  );
}

export default App;
