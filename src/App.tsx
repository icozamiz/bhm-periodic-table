import React, { useState } from "react";
import "./App.scss";
import { Box } from "@material-ui/core";
import { PeriodicTable, Legend } from "./components";
import { ICategory } from "./types";
import { useWindowSize } from "./hooks/useWindowSize";

const setViewWidthAndHeight = (width: string, height: string) => {
  document.body.style.setProperty(`--vw`, width);
  document.body.style.setProperty(`--vh`, height);
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const windowSize = useWindowSize();
  // Add a variable for vh to use for specifying full-screen height
  // 100vh does not work properly on iOS. https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  setViewWidthAndHeight(
    `${windowSize.width * 0.01}px`,
    `${windowSize.height * 0.01}px`
  );
  return (
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
  );
}

export default App;
