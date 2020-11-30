import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three/src/Three'
import { Geometry, Material } from 'three/src/Three'

export function Swarm({ count } : {count : number}) {
    const mesh = React.useRef<{instanceMatrix :any; setMatrixAt:any}>()
    const dummy = React.useMemo(() => new THREE.Object3D(), [])

    const createPosition = () => {
        const t = Math.random() * 100
        const factor = 20 + Math.random() * 100
        const speed = 0
        const xFactor = -20 + Math.random() * 40
        const yFactor = -20 + Math.random() * 40
        const zFactor = -20 + Math.random() * 40
        return { t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 }

    }
    const createPlanetPositionArray = () => {
        const a =  new Array(1000).fill(undefined)
        return a.map(() => {
            return createPosition()
        })
    }
  
    const particles = React.useMemo(() => {
      return createPlanetPositionArray()
    }, [])
  
    useFrame((state) => {
        if(mesh.current){
            particles.forEach((particle, i) => {
                let { t, factor, speed, xFactor, yFactor } = particle
                t = particle.t += speed / 2
                const a = Math.cos(t) + Math.sin(t * 1) / 10
                const b = Math.sin(t) + Math.cos(t * 2) / 10
                particle.mx += (0 - particle.mx) * 0.02
                particle.my += (0 - particle.my) * 0.02
                dummy.position.set(
                  (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                  (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                  10
                )
                dummy.updateMatrix()
                if(mesh.current){
                    mesh.current.setMatrixAt(i, dummy.matrix)
                }
                
              })
              mesh.current.instanceMatrix.needsUpdate = true
        }
     
    })
  
    return (
      <>
        <instancedMesh ref={mesh} args={[new Geometry(), new Material(), count]}>
          <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
          <meshPhongMaterial attach="material" color="white" />
        </instancedMesh>
      </>
    )
  }
