import create from 'zustand';

export const useStore = create((set)=>({
    visitLink:false,
    setVisitLink:(value)=>set((state)=>({visitLink:value})),
    playerPosition:[0,1,0],
    setPlayerPosition:(x,y,z)=> set((state)=>({playerPosition:[x,y,z]})) ,
    movement:{
        moveForward:false,
        moveBackward:false,
        moveLeft:false,
        moveRight:false,
        rotateLeft:false,
        rotateRight:false,
        boost:false,
         
    },
    setMovement:(keyCode)=> set((state)=>({movement: {...state.movement , [keyCode]:true }})),
    stopMovement:(keyCode)=> set((state)=>({movement: {...state.movement , [keyCode]:false }})),
    stopEveryMovement:()=>set((state)=>({ movement:{
        moveForward:false,
        moveBackward:false,
        moveLeft:false,
        moveRight:false,
        rotateLeft:false,
        rotateRight:false,
        boost:false,
        
    }})),
    isHologramPlaying:false,
    startHologramPlaying:()=>set((state)=>({isHologramPlaying:true})),
    stopHologramPlaying:()=>set((state)=>({isHologramPlaying:false})),

}))