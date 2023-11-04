import React, { forwardRef } from "react";
import { About } from "./sections/About";
import { Home } from "./sections/Home";
import { Scroll } from "./styled/Scroll";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { LoadingBar } from "./LoadingBar";
import { Contacts } from "./sections/Contacts";
import { Icons } from "./Icons";
import { Experience } from "./sections/Experience";
import { Credits } from "./sections/Credits";

const Overlay = forwardRef(
  (
    { scroll, haveAssetsLoaded }: { scroll: any; haveAssetsLoaded: boolean },
    ref: any,
  ) => {
    const scrollHelperRef = React.useRef<any>();
    const onScroll = React.useCallback(
      (e: any) => {
        scroll.current =
          e.target.scrollTop / (e.target.scrollHeight - window.innerHeight);
        if (
          scrollHelperRef.current.getBoundingClientRect().y <
          window.innerHeight * 0.8
        )
          scrollHelperRef.current.style.opacity = "0";
        else scrollHelperRef.current.style.opacity = "1";
      },
      [scrollHelperRef],
    );
    return (
      <Scroll ref={ref} onScroll={onScroll}>
        {haveAssetsLoaded ? (
          <>
            <Icons />
            <Home ref={scrollHelperRef} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contacts />
            <Credits />
          </>
        ) : (
          <LoadingBar />
        )}
      </Scroll>
    );
  },
);

export default Overlay;
