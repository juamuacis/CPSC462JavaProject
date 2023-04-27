import { OrbitControls } from '@react-three/drei'
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei'
import {Suspense} from 'react'
import { Physics, Debug, RigidBody, CuboidCollider} from '@react-three/rapier'
import * as THREE from 'three'


THREE.ColorManagement.legacyMode = false
import Boundaries from './Boundaries.jsx'
import Lights from './Lights.jsx'
import Placeholder from './Placeholder.jsx'
import Room from './Room.jsx'
import Movement from './Movement.jsx'
import Showroom from './Showroom.jsx'
import ShowroomBoundaries from './ShowroomBound.jsx'


export default function Experience()
{

    return <>
    
        <Lights/>
        
        <Physics>
            <ShowroomBoundaries/>
            <Movement/>
        </Physics>

        <Suspense
            fallback={ <Placeholder position-y ={0.5} scale={[2, 3, 2]}/>}>
           <Showroom/> 
            {/* <Room/>  */}
        </Suspense>
             

    </>
}