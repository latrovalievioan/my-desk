import { OrbitControls, useHelper } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './App.css';
import { Model } from './Desk';

function App() {
  return (
   <Canvas id="canvas-main" shadows> 
    <Suspense fallback={null}>
      <Model/>
      <OrbitControls />
    </Suspense>
  </Canvas>
  );
}

export default App;
