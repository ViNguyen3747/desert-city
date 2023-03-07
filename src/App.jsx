import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  OrbitControls,
  Html,
  ScrollControls,
} from "@react-three/drei";
import { Suspense } from "react";
import Scene from "./Scene";
function App() {
  return (
    <>
      {/* <div className="Overlay">
        <div className="top"></div> <div className="left"></div>
        <div className="bottom"></div> <div className="right"></div>
      </div> */}
      <Canvas camera={{ position: [0, -7, 30], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.8} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <ScrollControls pages={4}>
            <Scene />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
