
import {  usePlane } from '@react-three/cannon'
import { PositionalAudio } from '@react-three/drei'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import {  Vector3 } from 'three'
import { useKeyboardControls } from '../Hooks/useKeyBoardControls'
import { useStore } from '../Hooks/useStore'

import Model from './Model'

export default function Player(props) {
    const [setPlayerPosition] = useStore((state)=>[state.setPlayerPosition]);
    const keyMove = useKeyboardControls();
    const [isMoving,setIsMoving] = useState(false);
    const {camera} = useThree();
    const [ref,api] = usePlane(() => ({
        mass: 20,
        type:'Kinematic',
        ...props,
      }))
    const rotationRef = useRef([0,0,0]);
    useEffect(()=>api.rotation.subscribe((r)=>rotationRef.current=r),[api.rotation]);  
    useFrame(()=>{
        //Making camera follow player
        
        setPlayerPosition(ref.current.position.x,ref.current.position.y,ref.current.position.z);
        
        camera.position.x = ref.current.position.x;
        camera.position.y = ref.current.position.y + 2;
        camera.position.z = ref.current.position.z + 4 ;
        // console.log(camera);  
        if(keyMove.moveForward||keyMove.moveBackward||keyMove.rotateLeft||keyMove.rotateRight){
            setIsMoving(true);
        }
        else{
            setIsMoving(false);
        }
        const direction  = new Vector3();
        const frontVector = new Vector3(0,0, (keyMove.moveBackward?1:0)-(keyMove.moveForward?1:0) );
        const sideVector = new Vector3((keyMove.moveLeft?1:0)-(keyMove.moveRight?1:0),0,0);
        const SPEED = keyMove.boost?30:15;
        direction.subVectors(frontVector,sideVector).normalize().multiplyScalar(SPEED).applyEuler(ref.current.rotation);
        if(keyMove.rotateRight){ 
            rotationRef.current[1] -= 0.05
            api.rotation.set(rotationRef.current[0],rotationRef.current[1],rotationRef.current[2]);           
         }
         if(keyMove.rotateLeft){
            rotationRef.current[1] += 0.05
            api.rotation.set(rotationRef.current[0],rotationRef.current[1],rotationRef.current[2]);
         }
        api.velocity.set(direction.x,0,direction.z);
        if(audioBoost.current && keyMove.boost && !audioBoost.current.isPlaying){

            audioBoost.current.play();
        }
        else if(audioBoost.current && !keyMove.boost){
            audioBoost.current.stop();
        }
        if(audioMovement.current && isMoving && !audioMovement.current.isPlaying){

            audioMovement.current.play();
        }
        else if(audioMovement.current && !isMoving){
            audioMovement.current.stop();
        }

        
    });
    const audioBoost = useRef();
    const audioMovement = useRef();
    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio  ref={audioMovement}   distance={30}    url="AudioAssets/ShipMoving.wav" />
                <PositionalAudio ref={audioBoost} distance={15}  url="AudioAssets/ShipBoost.wav" />
                <Model  reference={ref} position={props.position} />
            </Suspense>
        </>
    )
}
