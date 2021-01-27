import React from 'react'
import { useStore } from '../../Hooks/useStore';
import './Button.css'

export default function Button() {
    const [setMovement,stopMovement,stopEveryMovement,setVisitLink] = useStore((state)=>[
        state.setMovement,state.stopMovement,state.stopEveryMovement,state.setVisitLink]);
    return (
        <>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}} 
        onPointerDown={(e)=>{ 
            setMovement('moveForward')
            e.preventDefault() }} 
        onPointerUp={(e)=>{
            stopMovement('moveForward')
            e.preventDefault()}} 
        className="upButton" >˄</h1>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}}  
        onPointerDown={(e)=>{ 
            setMovement('moveBackward')
            e.preventDefault() }} 
        onPointerUp={(e)=>{
            stopMovement('moveBackward')
            e.preventDefault()}}
        className="downButton" >˅</h1>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}}  
        onPointerDown={(e)=>{ 
            setMovement('rotateRight')
            e.preventDefault() }} 
        onPointerUp={(e)=>{
            stopMovement('rotateRight')
            e.preventDefault()}}
        className="rotateRightButton" >⟳</h1>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}}  
        onPointerDown={(e)=>{ 
            setMovement('rotateLeft')
            e.preventDefault() }} 
        onPointerUp={(e)=>{
            stopMovement('rotateLeft')
            e.preventDefault()}}
        className="rotateLeftButton" >⟲</h1>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}}  
        onPointerDown={(e)=>{ 
            setMovement('boost')
            e.preventDefault() }} 
        onPointerUp={(e)=>{
            stopMovement('boost')
            e.preventDefault()}}
        className="boostButton" >⇪</h1>
        <h1
        onContextMenu={(e)=>{e.preventDefault()}}
        onPointerLeave={(e)=>{stopEveryMovement()}}  
        onClick={(e)=>{
            setVisitLink(true); 
        }}
        className="enterButton" >↵</h1>
        </>
    )
}
