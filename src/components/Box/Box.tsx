import * as React from "react";
import { useFrame } from "react-three-fiber";
import { HOME_POSITIONS, isLetter } from "../../helpers/letters";
import { Html } from "drei";
import { MutableRefObject } from "react";

export const COLUMN_LENGTH = 10;
export const LINE_LENGTH = 30;
const BORDER_WIDTH = 0.01;
const GRID_SIZE = 0.5;

export enum Tabs {
  "Home" = "Home",
  "Projects" = "Projects",
  "Dev" = "Dev",
  "Contact" = "Contact",
  "Cv" = "Cv",
}

interface BoxProps {
  position: { x: number; y: number; z: number };
  speed: number;
  duration: number;
  currentTab: Tabs | null;
}

const BOX_SIZE = GRID_SIZE - BORDER_WIDTH;

export const Box: React.FunctionComponent<BoxProps> = ({
  position,
  speed,
  duration,
  currentTab,
}) => {
  const mesh = React.useRef<{
    rotation: { x: number; y: number };
    position: { x: number; y: number; z: number };
  }>();
  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  console.log(mesh.current?.position.z);
  let useFrameCount = mesh.current?.position.z || 0;

  const isHover =
    currentTab === Tabs.Home && isLetter(HOME_POSITIONS, position);

  useFrame(() => {
    useFrameCount++;

    if (mesh.current?.rotation && !isHover) {
      if (isHover) {
        mesh.current.position.z = 0;
      } else {
        mesh.current.position.z +=
          Math.cos(useFrameCount / (10 * duration)) * 0.01 * speed;
        // mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
      }
    }
  });
  return (
    <mesh
      ref={mesh}
      scale={isHover ? [1, 1, 3] : [1, 1, 2]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      position={[
        (position.x + (LINE_LENGTH - GRID_SIZE) / 2) * GRID_SIZE,
        (position.y + (COLUMN_LENGTH - GRID_SIZE) / 2) * GRID_SIZE,
        position.z,
      ]}
    >
      <boxBufferGeometry args={[BOX_SIZE, BOX_SIZE, BOX_SIZE]} />
      <meshStandardMaterial color={isHover ? "hotpink" : "white"} />
    </mesh>
  );
};
