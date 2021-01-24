import { Box } from "@material-ui/core";
import * as React from "react";
import { jsonData } from "../../data/element-json";
import { IElement } from "../../types";
import { categories } from "../../data/categories";
import { ElementCard } from "../element-card";
import "./styles.scss";

export interface ICategoryTableProps {}

export const CategoryTable = (_: ICategoryTableProps) => {
  const elData: { [categoryName: string]: IElement[] } = {};
  const onElementClicked = (element: IElement) => {
    window.open(element.urlLink, "_blank");
  };
  categories.map((cat) => (elData[cat.id] = []));
  jsonData.forEach((data) => {
    elData[data.category].push(data);
  });
  return (
    <Box className="bhm-category-table">
      {categories.map((cat) => (
        <>
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
              <img
                className="category-element-image"
                loading="eager"
                src={`./assets/${data.imageUrl}`}
                alt={data.name}
              />
            </Box>
          ))}
        </>
      ))}
    </Box>
  );
};
