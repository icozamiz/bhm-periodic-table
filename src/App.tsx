import React, { useState } from "react";
import {
  Switch,
  Route,
  useHistory,
  RouteComponentProps,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Box, IconButton, Menu, MenuItem } from "@material-ui/core";
import { PeriodicTable, Legend, AboutBadge } from "./components";
import { ICategory } from "./types";
import { useWindowSize } from "./hooks/useWindowSize";
import { useDeviceTypes } from "./hooks/useDeviceTypes";
import { CategoryTable } from "./components/category-table";
import { AboutPage, DonatePage } from "./pages";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

const setViewWidthAndHeight = (width: string, height: string) => {
  document.body.style.setProperty(`--vw`, width);
  document.body.style.setProperty(`--vh`, height);
};

function App() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & Element) | null
  >(null);
  const togglePopover = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = (route: string, history: any) => {
    setAnchorEl(null);
    switch (route) {
      case "about":
        window.open("/about", "_self");
        break;
      case "p4d":
        window.open("https://www.parentsfordiversity.com/", "_blank");
        break;
      case "donate":
        window.open("/donate", "_self");
        break;
      default:
        window.open("/", "_self");
    }
  };
  const [forceDesktopView, setForceDesktopView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const windowSize = useWindowSize();
  const { matchesDesktop } = useDeviceTypes();

  // Add a variable for vh to use for specifying full-screen height
  // 100vh does not work properly on iOS. https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  setViewWidthAndHeight(
    `${windowSize.width * 0.01}px`,
    `${windowSize.height * 0.01}px`
  );
  const containerClass = matchesDesktop ? "desktop" : "mobile";
  return (
    <Box className="app-container">
      <IconButton
        aria-label="menu"
        className="menu-button"
        onClick={(event) => togglePopover(event)}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("about", history)}>About</MenuItem>
        <MenuItem onClick={() => handleClose("/", history)}>Table</MenuItem>
        <MenuItem onClick={() => handleClose("donate", history)}>
          Donate
        </MenuItem>
        <MenuItem onClick={() => handleClose("p4d", history)}>
          Parents For Diversity
        </MenuItem>
      </Menu>
      <Router>
        <Switch>
          <Route
            path="/about"
            render={(browserRouterProps: RouteComponentProps) => (
              <Box className={clsx("about-page-container", containerClass)}>
                <AboutPage
                  language={"english"}
                  {...browserRouterProps}
                ></AboutPage>
              </Box>
            )}
          ></Route>
          <Route
            path="/donate"
            render={(browserRouterProps: RouteComponentProps) => (
              <Box className={clsx("donate-page-container", containerClass)}>
                <DonatePage {...browserRouterProps}></DonatePage>
              </Box>
            )}
          ></Route>
          <Route path="/">
            <Box className={clsx("bhm-periodic-table-app", containerClass)}>
              <h1 className="bhm-title">
                Periodic Table of Canadian Black History
              </h1>
              {matchesDesktop || forceDesktopView ? (
                <Box className="bhm-periodic-table-container">
                  <PeriodicTable
                    showListView={() => setForceDesktopView(false)}
                    onCategoryHovered={(category) =>
                      setSelectedCategory(category)
                    }
                  ></PeriodicTable>
                  <Box className="legend-container">
                    <Legend
                      selectedCategory={selectedCategory}
                      onCategorySelected={(category: ICategory) =>
                        setSelectedCategory(category.id)
                      }
                    />
                  </Box>
                </Box>
              ) : (
                <CategoryTable
                  showDesktopView={(show) => setForceDesktopView(show)}
                ></CategoryTable>
              )}
              <AboutBadge className={containerClass}></AboutBadge>
            </Box>
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
