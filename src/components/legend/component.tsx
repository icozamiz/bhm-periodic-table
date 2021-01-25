import { Box } from "@material-ui/core";
import * as React from "react";
import "./styles.scss";
import { categories } from "../../data/categories";
import { ICategory } from "../../types";

export interface ILegendProps {
  selectedCategory: string;
  onCategorySelected: (category: ICategory) => void;
}

export const Legend = ({
  selectedCategory,
  onCategorySelected,
}: ILegendProps) => {
  return (
    <Box className="legend">
      {categories.map((category) => {
        const className =
          selectedCategory === category.id
            ? `${category.id} icon selected`
            : `${category.id} icon`;
        const labelClassName =
          selectedCategory === category.id
            ? `${category.id} label selected`
            : `${category.id} label`;
        return (
          <Box
            className="legend-item"
            onClick={() => onCategorySelected(category)}
          >
            <Box className={className}></Box>
            <Box className={labelClassName}>{category.name}</Box>
          </Box>
        );
      })}
    </Box>
  );
};
