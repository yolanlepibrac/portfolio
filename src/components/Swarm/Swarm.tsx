import * as React from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { BufferGeometry, Material, Geometry, Colors } from "three";
import * as THREE from "three";
import niceColors from "nice-color-palettes";

const PARTICLES_NUMBER = 1000;

const createPosition = () => {
  const t = Math.random() * 100;
  const factor = 20 + Math.random() * 100;
  const speed = 0.005;
  const xFactor = -30 + Math.random() * 60;
  const yFactor = -20 + Math.random() * 40;
  const zFactor = Math.random() * 5 + 15;
  const scale = Math.random() * 2 + 1;
  return { t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0, scale };
};
const createPlanetPositionArray = () => {
  const a = new Array(PARTICLES_NUMBER).fill(undefined);
  return a.map(() => {
    return createPosition();
  });
};

const COLORS = ["#ADD5FF", "#0A1045", "#002FFF", "#19DDFF", "#13OO7E"];

const tempColor = new THREE.Color();

export const Swarm = (props: any) => {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef<{
    instanceMatrix: any;
    setMatrixAt: any;
    rotation: any;
    geometry: any;
  }>();
  const colors = new Array(PARTICLES_NUMBER)
    .fill(undefined)
    .map(() => COLORS[Math.floor(Math.random() * 5)]);
  const colorArray = React.useMemo(
    () =>
      Float32Array.from(
        new Array(PARTICLES_NUMBER)
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
      const { t, factor, speed, xFactor, yFactor, zFactor, scale } = particle;
      const move = (particle.t += speed / 2);
      const a = Math.cos(move) + Math.sin(move * 1) / 10;
      const b = Math.sin(move) + Math.cos(t * 2) / 10;
      particle.mx += (0 - particle.mx) * 0.02;
      particle.my += (0 - particle.my) * 0.02;
      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((move / 10) * factor) +
          (Math.sin(move * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((move / 10) * factor) +
          (Math.cos(move * 2) * factor) / 10,
        zFactor
      );
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();

      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  const setColor = (e: number | undefined) => {
    // console.log(e);
    // set(e);
    if (mesh.current?.geometry && e) {
      console.log(particles[e].xFactor);
      tempColor
        .set(e === hovered ? "blue" : colors[e])
        .toArray(colorArray, e * 3);

      mesh.current.geometry.attributes.color.needsUpdate = true;
    }
  };

  return (
    <instancedMesh
      ref={mesh}
      args={[
        (null as unknown) as BufferGeometry,
        (null as unknown) as Material,
        PARTICLES_NUMBER,
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
