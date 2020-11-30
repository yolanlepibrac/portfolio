import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three/src/Three'
import { Geometry, Material } from 'three/src/Three'
import { Swarm } from '../Swarm/Swarm'

const  Box = (props:any) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef< {rotation: {x: number, y : number}}>()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
      if(mesh.current?.rotation){
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      }
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
interface FakeSphereProps {
    position: Position
}
interface Position {
    x:number;y:number;z:number
}


  

  

  
const ThreeCanvas = () =>  {
  return (
    <Canvas style={{height:"100vh"}}  camera={{  position: [0, 0, -5] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      {/* {PLANET_POSITION.map((position) => {
        return (<FakeSphere position={position}/>)
      })} */}
      <Swarm  count={1000} />
      
    </Canvas>
  )
}

export default  ThreeCanvas 
