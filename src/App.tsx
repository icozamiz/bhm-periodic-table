import React, { useState } from "react";
import "./App.scss";
import { Box } from "@material-ui/core";
import { PeriodicTable, Legend, AboutBadge } from "./components";
import { ICategory } from "./types";
import { useWindowSize } from "./hooks/useWindowSize";
import { useDeviceTypes } from "./hooks/useDeviceTypes";
import { CategoryTable } from "./components/category-table";

const setViewWidthAndHeight = (width: string, height: string) => {
  document.body.style.setProperty(`--vw`, width);
  document.body.style.setProperty(`--vh`, height);
};
function App() {
  const [forceDesktopView, setForceDesktopView] = useState(false);
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
    : "bhm-periodic-table-app mobile";
  return (
    <Box className={containerClass}>
      <h1 className="bhm-title">Periodic Table of Canadian Black History</h1>
      {matchesDesktop || forceDesktopView ? (
        <Box className="bhm-periodic-table-container">
          <PeriodicTable
            showListView={() => setForceDesktopView(false)}
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
        <CategoryTable
          showDesktopView={(show) => setForceDesktopView(show)}
        ></CategoryTable>
      )}
      {matchesDesktop && <AboutBadge></AboutBadge>}
    </Box>
  );
}

export default App;
