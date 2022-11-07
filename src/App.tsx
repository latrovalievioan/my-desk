import { Canvas, useThree } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Overlay from './Overlay';
import { Model } from './Desk';
import { GlobalStyles } from './GlobalStyles';
import { useIsDesktop } from './utils';
import { Mobile } from './sections/Mobile';

function App() {
  const [haveAssetsLoaded, setHaveAssetsLoaded] = React.useState(false);

  const isDesktop = useIsDesktop();

  const overlay = React.useRef();
  const scroll = React.useRef(0);

  return isDesktop ? (
    <>
      <GlobalStyles />
      <Canvas
        id="canvas-main"
        onCreated={(state) => {
          if (!overlay.current || !state.events.connect) return;
          return state.events.connect(overlay.current);
        }}
      >
        <Suspense fallback={null}>
          <Model scroll={scroll} setHaveAssetsLoaded={setHaveAssetsLoaded} />
        </Suspense>
      </Canvas>
      <Overlay
        ref={overlay}
        scroll={scroll}
        haveAssetsLoaded={haveAssetsLoaded}
      />
    </>
  ) : (
    <>
      <GlobalStyles />
      <Mobile />
    </>
  );
}

export default App;
