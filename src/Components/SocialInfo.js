import React from 'react'
import Github from './Models/InteractiveLinks/Github';
import Instagram from './Models/InteractiveLinks/Instagram';
import LinkdedIn from './Models/InteractiveLinks/LinkedIn';
import Twitter from './Models/InteractiveLinks/Twitter';

import { Text } from '@react-three/drei';
export default function SocialInfo(props) {
    return (
        <>
        <group {...props}>
        <Text color={'hotpink'}
            castShadow
            fontSize={0.8}
            rotation={[-Math.PI/4,0,0]}
            lineHeight={1}
            position={[-1.5,0,5]}
            > Want to connect ? Press 'Enter' when below the tags</Text>
            <Github url={'https://github.com/Kaushal-Panchal'} scale={[0.5,0.5,0.5]} groupPosition={props.position}  position={[-7,3,0]} />
            
            <Twitter url={'https://twitter.com/_Kaushal_p'} groupPosition={props.position} position={[-3.5,3,0]}/>
           
            <LinkdedIn url={'https://www.linkedin.com/in/kaushal-panchal-a20220172/'} groupPosition={props.position} position={[0,3,0]}/>
            
            <Instagram url={'https://www.instagram.com/kaushal_panchal_/?hl=en'} groupPosition={props.position} position={[3.5,3,0]}/>
        </group>
        
        </>
    )
}
