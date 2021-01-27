import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import ArrowRight from "@material-ui/icons/ArrowRight";
import React from "react";
import "./styles.scss";

export interface IDonatePageProps extends RouteComponentProps {}

export const DonatePage = (_: IDonatePageProps) => {
  const onDonateClick = () => {
    window.open("https://www.parentsfordiversity.com/donate", "_blank");
  };
  return (
    <Box className="donate-page">
      <h1>Donate to Parents For Diversity</h1>
      <div className="info">
        <p className="info-description">
          Parents for Diversity is a collective of parents and allies committed
          to ensuring every child’s right to an education free from
          discrimination. We advocate for schools, families and communities to
          promote equity and inclusive education and to take meaningful steps to
          protect human rights for all by:
        </p>
        <div className="donate-point">
          <ArrowRight />
          <p>
            raising awareness about the implications of racism, intolerance and
            discrimination in the education system on all members of society;
          </p>
        </div>
        <div className="donate-point">
          <ArrowRight />
          <p>
            developing workshops, materials and resources for families and
            schools;
          </p>
        </div>
        <div className="donate-point">
          <ArrowRight />
          <p>
            supporting caregivers and families to advocate for children who
            experience discrimination or bias in schools.
          </p>
        </div>
      </div>
      <Button className="donate-button" onClick={() => onDonateClick()}>
        Donate Now
      </Button>
    </Box>
  );
};
