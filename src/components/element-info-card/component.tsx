import { Box } from "@material-ui/core";
import { useState } from "react";
import { IElement } from "../../types";
import "./styles.scss";

export interface IElementInfoCardProps {
  element: IElement;
  isMobile?: boolean;
  onClick?: (element: IElement) => void;
}

export const ElementInfoCard = ({
  element,
  onClick,
  isMobile,
}: IElementInfoCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);
  const { number, category, id, name, dates } = element;
  return (
    <Box
      className={`element-info-card`}
      onClick={() => onClick && onClick(element)}
    >
      {!hasImageError && !isMobile ? (
        <img
          onError={() => setHasImageError(true)}
          className="element-image"
          src={`./assets/${element.imageUrl}`}
          alt={element.name}
        />
      ) : (
        <Box className={`element-box ${category}`}>
          <Box className="number">{number}</Box>
          <Box className="id">{id}</Box>
          <Box className="name">{name}</Box>
          <Box className="dates">{dates}</Box>
        </Box>
      )}
      {element.infoBlurb ? (
        <Box className="element-info">
          <Box className="title">{name}</Box>
          <Box>{element.infoBlurb}</Box>
        </Box>
      ) : (
        <Box className="element-info">{name}</Box>
      )}
    </Box>
  );
};
