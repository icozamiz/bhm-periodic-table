import React from "react";
import { useDebounce } from "./useDebounce";

const useWindowSize = (delayInMs?: number) => {
  const [windowHeight, setWindowHeight] = React.useState(
    document.documentElement.clientHeight
  );
  const [windowWidth, setWindowWidth] = React.useState(
    document.documentElement.clientWidth
  );

  const debouncedWindowHeight = useDebounce(windowHeight, delayInMs ?? 1000);
  const debouncedWindowWidth = useDebounce(windowWidth, delayInMs ?? 0);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(document.documentElement.clientHeight);
      setWindowWidth(document.documentElement.clientWidth);
    };

    // Hack to handle scrollbar appearing at the time of page load since scrollbar changes the window size
    // but does not trigger a resize event.
    setTimeout(() => handleWindowResize(), 500);

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { height: debouncedWindowHeight, width: debouncedWindowWidth };
};

export { useWindowSize };
