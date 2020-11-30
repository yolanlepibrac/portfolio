
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three/src/Three'
import { Geometry, Material } from 'three/src/Three'
import { Swarm } from '../Swarm/Swarm'


const FakeSphere = ({position}: FakeSphereProps) => {
    const [isColoredSphere, setIsColoredSphere] = React.useState(false)
    const setHover = () => {
        setIsColoredSphere(true)
        setTimeout(() => {
            setIsColoredSphere(false)
        }, 1000)
    }
    const unsetHover  = () => {
        console.log("clear color")
    }
    const { color, pos, ...props } = useSpring({
        color: isColoredSphere ? 'hotpink' : 'blue',
        pos: isColoredSphere ? [0, 0, 2] : [0, 0, 0],
        'material-opacity': isColoredSphere ? 0.6 : 0.25,
        scale: isColoredSphere ? [1.5, 1.5, 1.5] : [1, 1, 1],
        config: { mass: 1000, tension: 1000, friction: 300, precision: 0.00001 }
      })
  return (
    <animated.mesh scale={[1, 1, 1]} position={[position.x,position.y,position.z]} onPointerOver={(e) => setHover()} onPointerOut={(e) => unsetHover()}>
    <sphereBufferGeometry args={[6, 10, 10 ]} attach="geometry" />
    <animated.meshStandardMaterial opacity={1} color={isColoredSphere ? color : "rgba(30,30,30,1)"} attach="material" />
  </animated.mesh>
  )
  }