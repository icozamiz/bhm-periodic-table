import { Box } from "@material-ui/core";
import * as React from "react";
import { IElement } from "../../types";
import "./styles.scss";

export interface IElementCardProps {
  element: IElement;
  onClick: (element: IElement) => void;
  onHovered: (element: IElement | null) => void;
  onCategoryHovered: (category: string) => void;
}

export const ElementCard = ({
  element,
  onClick,
  onHovered,
  onCategoryHovered,
}: IElementCardProps) => {
  const { number, category, id, name, dates } = element;

  return (
    <Box
      title="Click for more info"
      className={`element-card element-${number} ${category}`}
      onMouseEnter={() => {
        onCategoryHovered(category);
        onHovered(element);
      }}
      onMouseLeave={() => {
        onCategoryHovered("");
        onHovered(null);
      }}
      onClick={() => onClick(element)}
    >
      <Box className="element-number">{number}</Box>
      <Box className="element-id">{id}</Box>
      <Box className="element-name">{name}</Box>
      <Box className="element-dates">{dates}</Box>
    </Box>
  );
};
