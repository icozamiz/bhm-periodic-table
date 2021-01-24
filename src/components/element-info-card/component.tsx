import { Box } from "@material-ui/core";
import { IElement } from "../../types";
import { elementInfoJson } from "../../data/element-info";
import "./styles.scss";

export interface IElementInfoCardProps {
  element: IElement;
  onClose: () => void;
}

export const ElementInfoCard = ({
  element,
  onClose,
}: IElementInfoCardProps) => {
  const { number, category, id, name, dates } = element;
  const elInfo = (elementInfoJson as any)[number];
  return (
    <Box className={`element-info-card`} onClick={() => onClose()}>
      {elInfo ? (
        <img
          className="element-image"
          src={`./assets/${elInfo.imageUrl}`}
          alt={elInfo.name}
        />
      ) : (
        <Box className={`element-box ${category}`}>
          <Box className="number">{number}</Box>
          <Box className="id">{id}</Box>
          <Box className="name">{name}</Box>
          <Box className="dates">{dates}</Box>
        </Box>
      )}
      {elInfo ? (
        <Box className="element-info">
          <Box className="title">{name}</Box>
          <Box>{elInfo.infoBlurb}</Box>
        </Box>
      ) : (
        <Box className="element-info">{name}</Box>
      )}
    </Box>
  );
};
