import * as React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { BufferGeometry, Material, Geometry, Colors } from "three";
import * as THREE from "three";
import niceColors from "nice-color-palettes";

const createPosition = () => {
  const t = Math.random() * 100;
  const factor = 20 + Math.random() * 100;
  const speed = 0;
  const xFactor = -20 + Math.random() * 40;
  const yFactor = -20 + Math.random() * 40;
  const zFactor = -20 + Math.random() * 40;
  return { t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 };
};
const createPlanetPositionArray = () => {
  const a = new Array(1000).fill(undefined);
  return a.map(() => {
    return createPosition();
  });
};

const tempColor = new THREE.Color();

export const Swarm = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef<{
    instanceMatrix: any;
    setMatrixAt: any;
    rotation: any;
    geometry: any;
  }>();
  const colors = new Array(1000).fill(undefined).map(() => "#AA9055");
  const colorArray = React.useMemo(
    () =>
      Float32Array.from(
        new Array(1000)
          .fill(undefined)
          .flatMap((_, i) => tempColor.set(colors[i]).toArray())
      ),
    []
  );
  const dummy = React.useMemo(() => new THREE.Object3D(), []);
  // Set up state for the hovered and active state
  const [active, setActive] = React.useState(false);
  // Rotate mesh every frame, this is outside of React without overhead

  const [hovered, set] = React.useState<number>();
  const previous = React.useRef<number>();
  React.useEffect(() => void (previous.current = hovered), [hovered]);

  const particles = React.useMemo(() => {
    return createPlanetPositionArray();
  }, []);

  useFrame(() => {
    if (!mesh.current || !mesh.current?.setMatrixAt) {
      return;
    }
    particles.forEach((particle, i) => {
      const { t, factor, speed, xFactor, yFactor } = particle;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      particle.mx += (0 - particle.mx) * 0.02;
      particle.my += (0 - particle.my) * 0.02;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        10
      );
      dummy.updateMatrix();
      if (hovered !== previous.current && mesh.current?.geometry) {
        tempColor
          .set(i === hovered ? "white" : colors[i])
          .toArray(colorArray, i * 3);

        mesh.current.geometry.attributes.color.needsUpdate = true;
      }
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const setColor = (e: any) => {
    // console.log(e);
    set(e);
  };

  return (
    <instancedMesh
      ref={mesh}
      args={[
        (null as unknown) as BufferGeometry,
        (null as unknown) as Material,
        1000,
      ]}
      onPointerMove={(e) => setColor(e.instanceId)}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]}>
        <instancedBufferAttribute
          attachObject={["attributes", "color"]}
          args={[colorArray, 3]}
        />
      </sphereBufferGeometry>
      <meshPhongMaterial
        attach="material"
        vertexColors={(THREE.VertexColors as unknown) as boolean}
      />
    </instancedMesh>
  );
};
