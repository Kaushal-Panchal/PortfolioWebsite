import { Physics } from '@react-three/cannon';
import { Html,   PerspectiveCamera,   Stars, Stats, Text } from '@react-three/drei';
import { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Canvas} from 'react-three-fiber';
import './App.css';
import Button from './Components/Buttons/Button';
import Effect from './Components/Effect';
import Ground from './Components/Ground';
import Projects from './Components/Models/GuideAndTexts/Projects';
import Player from './Components/Player';
import AboutMe from './Components/Models/GuideAndTexts/AboutMe';
import PlayGround from './Components/Models/MyProjects/PlayGround';
import Chess from './Components/Models/MyProjects/Chess';
import CenterPose from './Components/Models/Statues/CenterPose';
import NameCharacter from './Components/Models/Statues/NameCharacter';
import PlayingArcade from './Components/Models/Statues/PlayingArcade';
import SocialInfo from './Components/SocialInfo';
import Instructions from './Components/Models/GuideAndTexts/Instructions';

function Loader() {

  return (
    <Html center>
      <span style={{ color: 'white' ,fontSize:'25px' }}>LOADING...</span>
    </Html>
  )
}

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  return (
    <>
    {isTabletOrMobile?<Button/>:null}
    
    <Canvas  shadowMap gl={{antialias:true}} >
      <PerspectiveCamera fov={75} aspect={300 /window.innerHeight}  makeDefault={true}/>
      <fog attach="fog" args={['rgb(0,107,128)',10,500]}/>
      <ambientLight intensity={0.1} />
      <Stats/>
      <Suspense fallback={<Loader/>}>
          {/* <Name rotation={[Math.PI/8,0,0]}  position={[-6.5,-4,-20]}/> */}
          <Instructions position={[0,-5,0]}/>
          <NameCharacter scale={[3,3,3]} position={[0,-8,-55]}/>
          <AboutMe position={[5,-2,-45]} rotation={[0,-Math.PI/2,-Math.PI/2]} />
          <Projects rotation={[Math.PI/2,Math.PI/2,0]} position={[-5,-2,-45]} />
          <Text color={'skyblue'}
        castShadow
        fontSize={1}
        rotation={[0,0,0]}
        position={[-35,0,-50]}
        lineHeight={1}
        maxWidth={15}
      letterSpacing={0.02}
      textAlign={'center'}> Want to see my work ? Just reach the hoarding And press 'Enter' </Text>
          <PlayGround url={'https://kaushal-panchal.github.io/react-PlayGround/'} rotation={[0,-Math.PI/3,0]} position={[-50,0,-50]}/>
          
          <Chess  position={[-80,0,-55]}/>
          <PlayingArcade rotation={[0,-Math.PI/1.5,0]} position={[-60,-9,-60]} />
          
          <SocialInfo position={[55,0,-75]}/>
          <CenterPose scale={[0.5,0.5,0.5]} rotation={[0,-Math.PI/3,0]} position={[75,-8,-70]} />
          
          <Physics>
            <Ground position={[0,-10,0]}/>
          </Physics>
          <Physics gravity={[0,-30,0]}>
             <Player position={[0,2,25]} />
          </Physics>
      </Suspense>
      
      <Stars radius={300}  />
      <Effect/>

    </Canvas>
    
    </>
  );
}

export default App;
