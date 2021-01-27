import { usePlane } from '@react-three/cannon'
import React, { Suspense } from 'react'
import { useUpdate } from 'react-three-fiber';
import {noise} from '../Util/perlin';



export default function Ground(props) {
    const [ref] = usePlane(()=>({ rotation:[-Math.PI / 2, 0, 0] ,...props}))
    const mesh = useUpdate(({ geometry }) => {
        noise.seed(Math.random());
        let pos = geometry.getAttribute("position");
        let pa = pos.array;
        const hVerts = geometry.parameters.heightSegments + 1;
        const wVerts = geometry.parameters.widthSegments + 1;
        for (let j = 0; j < hVerts; j++) {
          for (let i = 0; i < wVerts; i++) {
            const ex = 1.1;
            pa[3 * (j * wVerts + i) + 2] =
              (noise.simplex2(i / 100, j / 100) +
                noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
                noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
                noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
                +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
              2;
          }
        }
        pos.needsUpdate = true;
      });
      
      return (
        <Suspense fallback={null}>
        <group ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={props.position} >
        <mesh  receiveShadow dispose={null} ref={mesh}  >
          <planeBufferGeometry attach="geometry" args={[500,500, 700, 700]} />
          <meshPhongMaterial
            attach="material"
            shininess={0}
            color={"rgb(84, 70, 99)"}
            flatShading
          />
        </mesh>
        </group> 
        </Suspense> 
        )
}
