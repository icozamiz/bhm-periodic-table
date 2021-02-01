import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { donateFr, donateEn } from "./donate-data";
import React from "react";
import "./styles.scss";

export interface IDonatePageProps extends RouteComponentProps {
  isFrench: boolean;
}

export const DonatePage = ({ isFrench }: IDonatePageProps) => {
  const lang = isFrench ? donateFr : donateEn;
  const { title, description, infoPoints, buttonText } = lang;
  const onDonateClick = () => {
    window.open("https://www.parentsfordiversity.com/donate", "_blank");
  };
  return (
    <Box className="donate-page">
      <h1>{title}</h1>
      <div className="info">
        <p className="info-description">{description}</p>
        {infoPoints.map((point) => (
          <div className="donate-point">
            <ArrowRight />
            <p>{point}</p>
          </div>
        ))}
      </div>
      <Button className="donate-button" onClick={() => onDonateClick()}>
        {buttonText}
      </Button>
    </Box>
  );
};
