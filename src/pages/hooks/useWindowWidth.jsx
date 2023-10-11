import React from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function trackWindowWidth() {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", trackWindowWidth);

    return () => {
      window.removeEventListener("resize", trackWindowWidth);
    };
  }, []);

  return windowWidth;
}
