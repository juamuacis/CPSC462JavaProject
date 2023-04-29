import React, { Suspense } from 'react';
import { Html } from "@react-three/drei";
import Room from './Room';
import Pov from './Pov';
import Lights from './Lights';

export default function Experience()
{

    return (
    <>
        <Lights />
        
        <Pov /> 

        <Suspense>
            <Room />
        </Suspense>

    </>
    )
}