import { Canvas, useThree } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './App.css';
import Overlay from './Overlay';
import { Model } from './Desk';

function App() {
  const [haveAssetsLoaded, setHaveAssetsLoaded] = React.useState(false);

  const overlay = React.useRef();
  const scroll = React.useRef(0);

  return (
    <>
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
      <Overlay ref={overlay} scroll={scroll} haveAssetsLoaded={haveAssetsLoaded}/>
    </>
  );
}

export default App;
