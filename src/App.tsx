import React, { useState } from "react";
import "./App.scss";
import { Box } from "@material-ui/core";
import { PeriodicTable, Legend } from "./components";
import { ICategory } from "./types";
import { useWindowSize } from "./hooks/useWindowSize";
import { useDeviceTypes } from "./hooks/useDeviceTypes";
import { CategoryTable } from "./components/category-table";
import ReactGA from "react-ga";

const setViewWidthAndHeight = (width: string, height: string) => {
  document.body.style.setProperty(`--vw`, width);
  document.body.style.setProperty(`--vh`, height);
};
const trackingId = "G-35ZL4R0S4N"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
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
      <Box className="bhm-description">
        This
        <a href="https://github.com/icozamiz/bhm-periodic-table">project</a>was
        created using data from
        <a href="https://www.parentsfordiversity.com/">Parents for Diversity</a>
        in co-operation with
        <a href="https://twitter.com/MrOzamiz">Mr. Ozamiz</a>a teacher in
        Ottawa, ON, Canada.
      </Box>
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
    </Box>
  );
}

export default App;
