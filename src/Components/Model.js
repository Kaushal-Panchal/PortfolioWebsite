
import React, {  useMemo,  useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {  
  const [model, setModel] = useState()
  
  useMemo(() => new GLTFLoader().load("/model.gltf", setModel), [])
  return (
    <group scale={[0.7,0.5,0.7]} castShadow ref={props.reference}>
      {model ? <primitive object={model.scene} dispose={null} /> : null}
      {model? <spotLight castShadow intensity={2} color={'skyblue'} penumbra={1} angle={Math.PI/9} position={[0,10,15]} target={model.scene} />:null }
    </group>
  )  
}
