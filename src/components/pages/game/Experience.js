import React, { Suspense } from 'react';
import { Physics} from '@react-three/rapier';
import { PointerLockControls, } from "@react-three/drei";
import Room from './Room';
import Pov from './Pov';
import Lights from './Lights';
import Boundaries from './Boundaries';
import Movement from './Movement';
import Placeholder from './Placeholder';

export default function Experience()
{

    return (
    <>
        <Lights />
        <Suspense
         fallback= {<Placeholder position-y ={0.5} scale={[2, 3, 2]}/>}>

            {/* Camera with Physics */}
            <Physics>
                <PointerLockControls/>
                <Movement/>
                <Boundaries/>
                {/*  <Pov /> */} 
            </Physics>
        
            <Room />
        </Suspense>
    </>
    )
}