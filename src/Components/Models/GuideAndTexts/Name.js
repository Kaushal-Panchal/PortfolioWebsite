import {   useGLTF } from '@react-three/drei';
import React from 'react'



export default function Name(props) {  
  const { nodes, materials } = useGLTF("/Name.gltf", true)

   return (
    <>
    
    <group key={props.key} rotation={props.rotation} position={props.position} >
        <mesh scale={[2,3,3]} castShadow material={materials['NameGlow']} geometry={nodes.Text.geometry} />
        
    </group>
    </>
   );
}