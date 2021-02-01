import { Box, Button, IconButton } from "@material-ui/core";
import * as React from "react";
import { ElementCard } from "..";
import { jsonData } from "../../data/element-json";
import { jsonData as frJsonData } from "../../data/element-json-fr";
import { useDeviceTypes } from "../../hooks/useDeviceTypes";
import { IElement } from "../../types";
import { ElementInfoCard } from "../element-info-card";
import { MobilePopoverCard } from "../mobile-popover-card";
import CloseIcon from "@material-ui/icons/Close";
import "./styles.scss";

export interface IPeriodicTableProps {
  onCategoryHovered: (category: string) => void;
  showListView: () => void;
  isFrench: boolean;
}

export const PeriodicTable = ({
  isFrench,
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
    if (!matchesMobile) {
      setSelectedElement(element);
    }
  };
  const dataToDisplay = isFrench ? frJsonData : jsonData;
  const sortedData = dataToDisplay.sort(
    (a, b) => parseInt(a.number) - parseInt(b.number)
  );
  return (
    <>
      {matchesMobile && (
        <Button className="show-list-button" onClick={() => showListView()}>
          {isFrench ? "Voir Comme Liste" :"Show List View"}
        </Button>
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
        {selectedElement && !matchesMobile && (
          <ElementInfoCard isFrench={isFrench} element={selectedElement}></ElementInfoCard>
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
      {matchesMobile && (
        <MobilePopoverCard
          open={!!selectedElement}
          className="mobile-table-element-info-popup"
          contentClassName="mobile-element-info-popup-container"
          onClose={() => setSelectedElement(null)}
          topRightButton={
            <IconButton
              aria-label="close"
              className="close-button"
              size="small"
              onClick={() => setSelectedElement(null)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Box className="element-info-popup">
            <img
              className="category-element-image"
              src={`./assets/${selectedElement?.imageUrl}`}
              alt={selectedElement?.name}
            />
            <Box className="category-element-name">{selectedElement?.name}</Box>
            <Box className="info-blurb">{selectedElement?.infoBlurb}</Box>
            <Box
              className="learn-more-button"
              onClick={() => window.open(selectedElement?.urlLink, "_blank")}
            >
              {isFrench ? "Savoir Plus" : "Learn More"}
            </Box>
          </Box>
        </MobilePopoverCard>
      )}
    </>
  );
};
