import React from "react";

export const useIsDesktop = () => {

  const [isDesktop, setIsDesktop] = React.useState(window.matchMedia(`(min-width: 1356px)`).matches);

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: 1356px)`);

    const handleChange = (e: any) => {
      setIsDesktop(e.matches);
    };

    try {
      mql.addEventListener('change', handleChange);

      return () => {
        mql.removeEventListener('change', handleChange);
      };
    } catch {
      mql.addListener(handleChange);

      return () => {
        mql.removeListener(handleChange);
      };
    }

  }, []);

  return isDesktop;
};
