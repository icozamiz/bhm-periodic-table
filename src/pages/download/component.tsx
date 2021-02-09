import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { downloadEn, downloadFr } from "./download-data";

import "./styles.scss";

export interface IDownloadPageProps extends RouteComponentProps {
  isFrench: boolean;
}

export const DownloadPage = ({ isFrench }: IDownloadPageProps) => {
  const lang = isFrench ? downloadFr : downloadEn;
  const { title, subtitle } = lang;
  return (
    <Box className="download-page">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>
        <a
          href={`/assets/screenshots/${
            isFrench ? "French" : "English"
          }_CBH_Table.png`}
          download
        >
          <img
            className="download-image"
            src={`/assets/screenshots/${
              isFrench ? "French" : "English"
            }_CBH_Table.png`}
            alt="screenshot"
          />
        </a>
      </p>
    </Box>
  );
};
