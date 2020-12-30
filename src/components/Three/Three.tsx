import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { Tabs } from "../Box/Box";
import { BoxGrid } from "../BoxGrid/BoxGrid";

interface ThreeCanvasProps {
  currentTab: Tabs | null;
}

const ThreeCanvas: React.FunctionComponent<ThreeCanvasProps> = ({
  currentTab,
}) => {
  const mouse = useRef<any>([0, 0]);
  const onMouseMove = React.useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    []
  );
  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        marginTop: 56,
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ fov: 75, position: [0, 0, -5] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[0, 0, -100]} intensity={2.2} />
        <pointLight position={[-100, -0, -0]} intensity={5} color="white" />

        <BoxGrid currentTab={currentTab} mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
