import { useEffect } from "react"
import { useStore } from "./useStore";

const movementByKey= (key)=>{
    const keys = {
        KeyW:'moveForward',
        KeyS:'moveBackward',
        KeyA:'moveLeft',
        KeyD:'moveRight',
        KeyQ:'rotateLeft',
        KeyE:'rotateRight',
        ShiftLeft:'boost',
    }
    return keys[key];
}

export const useKeyboardControls = ()=>{
    const [movement,setMovement,stopMovement] = useStore((state)=>[state.movement,state.setMovement,state.stopMovement])
    useEffect(()=>{
        const handleKeyDown = (e)=>{
            if( movementByKey(e.code) ){
                setMovement(movementByKey(e.code));
            }
        };
        const handleKeyUp = (e)=>{
            if(movementByKey(e.code)){
                stopMovement(movementByKey(e.code));
            }
        };

        document.addEventListener('keydown',handleKeyDown);
        document.addEventListener('keyup',handleKeyUp);
        return (()=>{
            document.removeEventListener('keydown',handleKeyDown);
            document.removeEventListener('keyup',handleKeyUp);
        })
    });
    return movement;
}