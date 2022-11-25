import React from "react";

export const useIsDesktop = () => {

  const [isDesktop, setIsDesktop] = React.useState(window.matchMedia(`(min-width: 1px)`).matches);

  React.useEffect(() => {
    const mql = window.matchMedia(`(min-width: 1px)`);

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

export const throttle = <FN extends (...args: any[]) => any>(fn: FN, ms: number) => {
  let pass = true

  return (...args: Parameters<FN>): void => {
    if (!pass) return
    fn(...args)
    pass = false
    setTimeout(() => pass = true, ms)
  }
}
