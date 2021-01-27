

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Projects(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Projects.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <pointLight intensity={2} distance={15} position={[0,0,0]} />
      <mesh castShadow scale={[1,0.5,2.5]} material={materials.ArrowGlow} geometry={nodes.Cube.geometry} position={[0, 0.2, 0]} />
      <mesh
        castShadow
        material={materials.TextGlow}
        geometry={nodes.Text.geometry}
        position={[0, 0.3, 0]}
        rotation={[0,-Math.PI/2,0]}
      />
    </group>
  )
}

useGLTF.preload('/Projects.glb')
