import { useMediaQuery } from "@material-ui/core";

interface IBreakpoints {
  desktopMin?: number;
  mobileMax?: number;
  smallDesktopMin?: number;
  smallDesktopMax?: number;
}

interface IDeviceTypes {
  matchesDesktop: boolean;
  matchesSmallDesktop: boolean;
  matchesMobile: boolean;
}

export const useDeviceTypes = (
  breakpoints: IBreakpoints = {
    desktopMin: 961,
    mobileMax: 960,
    smallDesktopMin: 961,
    smallDesktopMax: 1014,
  }
): IDeviceTypes => {
  const {
    desktopMin,
    mobileMax,
    smallDesktopMin,
    smallDesktopMax,
  } = breakpoints;

  const options = {
    noSsr: true,
  };

  const matchesDesktop = useMediaQuery(`(min-width: ${desktopMin}px)`, options);
  const matchesMobile = useMediaQuery(`(max-width: ${mobileMax}px)`, options);
  const matchesSmallDesktop = useMediaQuery(
    `(min-width: ${smallDesktopMin}px) and (max-width: ${smallDesktopMax}px)`,
    options
  );

  return { matchesDesktop, matchesMobile, matchesSmallDesktop };
};
