import { Box, Button, IconButton } from "@material-ui/core";
import * as React from "react";
import { jsonData } from "../../data/element-json";
import { IElement } from "../../types";
import { categories } from "../../data/categories";
import { ElementCard } from "../element-card";
import "./styles.scss";
import { MobilePopoverCard } from "../mobile-popover-card";
import CloseIcon from "@material-ui/icons/Close";

export interface ICategoryTableProps {
  showTableView: (show: boolean) => void;
}

export const CategoryTable = ({ showTableView }: ICategoryTableProps) => {
  const [open, setOpen] = React.useState<IElement | null>(null);
  const elData: { [categoryName: string]: IElement[] } = {};
  const onElementClicked = (element: IElement) => {
    setOpen(element);
  };
  const onMoreInfoClicked = (element: IElement | null) => {
    if (element) {
      window.open(element.urlLink, "_blank");
    }
  };
  categories.map((cat) => (elData[cat.id] = []));
  jsonData.forEach((data) => {
    elData[data.category].push(data);
  });
  return (
    <Box className="bhm-category-table">
      <Button className="show-table-button" onClick={() => showTableView(true)}>
        Show Table View
      </Button>
      {categories.map((cat) => (
        <Box key={cat.id}>
          <h1 key={cat.id}>{cat.name}</h1>
          {elData[cat.id].map((data) => (
            <Box
              className="category-element"
              onClick={() => onElementClicked(data)}
              key={data.number}
            >
              <ElementCard
                element={data}
                onHovered={() => {}}
                onCategoryHovered={() => {}}
                onClick={() => {}}
              ></ElementCard>
              <Box className="category-element-info">
                <h2 className="category-element-name">{data.name}</h2>
                <h3 className="category-element-dates">{data.dates}</h3>
              </Box>
              {/* <img
                className="category-element-image"
                src={`./assets/${data.imageUrl}`}
                alt={data.name}
              /> */}
            </Box>
          ))}
        </Box>
      ))}
      <MobilePopoverCard
        open={!!open}
        className="mobile-element-info-popup"
        contentClassName="mobile-element-info-popup-container"
        onClose={() => setOpen(null)}
        topRightButton={
          <IconButton
            aria-label="close"
            className="close-button"
            size="small"
            onClick={() => setOpen(null)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        <Box className="element-info-popup">
          <img
            className="category-element-image"
            src={`./assets/${open?.imageUrl}`}
            alt={open?.name}
          />
          <Box className="info-blurb">{open?.infoBlurb}</Box>
          <Box
            className="learn-more-button"
            onClick={() => onMoreInfoClicked(open)}
          >
            Learn More
          </Box>
        </Box>
      </MobilePopoverCard>
    </Box>
  );
};
