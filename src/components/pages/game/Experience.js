import React, { Suspense } from 'react';
import { Physics } from '@react-three/rapier';
import { Html, OrbitControls, PointerLockControls, } from "@react-three/drei";
import Room from './Room';
import Pov from './Pov';
import Lights from './Lights';
import Boundaries from './Boundaries';
import Movement from './Movement';

export default function Experience()
{

    return (
    <>
        <Lights />

       {/* Camera with Physics */}
       <Physics>
            <PointerLockControls/>
            <Movement/>
            <Boundaries/>
       </Physics>
        
       {/*  <Pov /> */}

        <Suspense>
            <Room />
        </Suspense>
    </>
    )
}