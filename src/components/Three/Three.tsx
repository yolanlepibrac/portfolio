import React, { useRef, useState, MutableRefObject } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Swarm } from "../Swarm/Swarm";
import * as THREE from "three";
import Effects from "./Effects";
import { Box, Tabs } from "../Box/Box";
import { BoxGrid } from "../BoxGrid/BoxGrid";

interface ThreeCanvasProps {
  currentTab: Tabs;
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
    <div onMouseMove={onMouseMove} style={{ width: "100%", height: "100vh" }}>
      <Canvas
        style={{ width: "100%", height: "100vh" }}
        camera={{ fov: 75, position: [0, 0, -5] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputEncoding = THREE.sRGBEncoding;
        }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[100, 100, 100]} intensity={2.2} />
        <pointLight position={[-100, -0, -0]} intensity={5} color="red" />
        {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
        {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
        {/* {PLANET_POSITION.map((position) => {
        return (<FakeSphere position={position}/>)
      })} */}
        {/* <Swarm count={1000} /> */}
        <BoxGrid currentTab={currentTab} mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
