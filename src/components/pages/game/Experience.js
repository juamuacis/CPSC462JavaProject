import React, { Suspense } from 'react';
<<<<<<< HEAD
import { Physics } from '@react-three/rapier';
import { Html, OrbitControls, PointerLockControls, } from "@react-three/drei";
import Room from './Room';
import Pov from './Pov';
import Lights from './Lights';
import Boundaries from './Boundaries';
import Movement from './Movement';
=======
import { Html } from "@react-three/drei";
import Room from './Room';
import Pov from './Pov';
import Lights from './Lights';
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2

export default function Experience()
{

    return (
    <>
        <Lights />
<<<<<<< HEAD

       {/* Camera with Physics */}
       <Physics>
            <PointerLockControls/>
            <Movement/>
            <Boundaries/>
       </Physics>
        
       {/*  <Pov /> */}
=======
        
        <Pov /> 
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2

        <Suspense>
            <Room />
        </Suspense>
<<<<<<< HEAD
=======

>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2
    </>
    )
}