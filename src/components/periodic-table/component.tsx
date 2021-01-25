import { Box } from "@material-ui/core";
import * as React from "react";
import { ElementCard } from "..";
import { jsonData } from "../../data/element-json";
import { useDeviceTypes } from "../../hooks/useDeviceTypes";
import { IElement } from "../../types";
import { ElementInfoCard } from "../element-info-card";
import "./styles.scss";

export interface IPeriodicTableProps {
  onCategoryHovered: (category: string) => void;
  showListView: () => void;
}

export const PeriodicTable = ({
  onCategoryHovered,
  showListView,
}: IPeriodicTableProps) => {
  const { matchesMobile } = useDeviceTypes();
  const [selectedElement, setSelectedElement] = React.useState<IElement | null>(
    null
  );
  const onElementClicked = (element: IElement) => {
    matchesMobile
      ? setSelectedElement(element)
      : window.open(element.urlLink, "_blank");
  };
  const onElementHovered = (element: IElement | null) => {
    setSelectedElement(element);
  };
  const sortedData = jsonData.sort(
    (a, b) => parseInt(a.number) - parseInt(b.number)
  );
  return (
    <>
      {matchesMobile && (
        <Box className="show-list-button" onClick={() => showListView()}>
          Show List View
        </Box>
      )}
      <Box className="bhm-periodic-table">
        {sortedData.slice(0, 4).map((e: IElement) => {
          return (
            <ElementCard
              key={e.number}
              element={e}
              onHovered={(element) => onElementHovered(element)}
              onClick={(element) => onElementClicked(element)}
              onCategoryHovered={(category) => onCategoryHovered(category)}
            ></ElementCard>
          );
        })}
        {selectedElement && (
          <ElementInfoCard element={selectedElement}></ElementInfoCard>
        )}
        {sortedData.slice(4, sortedData.length).map((e: IElement) => {
          return (
            <ElementCard
              key={e.number}
              element={e}
              onHovered={(element) => onElementHovered(element)}
              onClick={(element) => onElementClicked(element)}
              onCategoryHovered={(category) => onCategoryHovered(category)}
            ></ElementCard>
          );
        })}
      </Box>
    </>
  );
};
