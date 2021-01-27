import { Text } from '@react-three/drei'
import React from 'react'

export default function Instructions(props) {
    return (
        <>
        <group {...props}>
            <Text color={'teal'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[0,0,5]}>W -Forward</Text>
          <Text color={'teal'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[0,0,0]} >S -Backward</Text>
          <Text color={'teal'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[5,0,2.5]}>Q -Rotate Left</Text>
          <Text color={'teal'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[-5,0,2.5]} >E -Rotate Right</Text>
          <Text color={'hotpink'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[0,0,-5]}>LShift - Boost</Text>
        </group>    
        </>
    )
}
