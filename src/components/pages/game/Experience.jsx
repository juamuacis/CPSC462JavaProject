import { OrbitControls} from '@react-three/drei'
/* import { Perf } from 'r3f-perf' */
import {Suspense} from 'react'
import { Physics, Debug, RigidBody, CuboidCollider} from '@react-three/rapier'
import * as THREE from 'three'

import Lights from './Lights.jsx'
import Placeholder from './Placeholder.jsx'
import Room from './Room.jsx'

export default function Experience () {

      return <>
          
          <OrbitControls makeDefault />
  
          <Lights/>
        <Physics>
  
              {/*Floor*/ }
              <RigidBody type="fixed">
          <mesh >
              <boxGeometry args={[30, .5, 30]}/>
              <meshStandardMaterial color="greenyellow"/>
          </mesh>
          </RigidBody>
  
          {/* Player*/}
          
          <RigidBody >
              <mesh position={[0, 2, 0]}>
                  <sphereGeometry/>
                  <meshStandardMaterial color="blue"/>
  
              </mesh>
              </RigidBody>
         </Physics>
  
          <mesh scale={[10, .5, 10]} position={[0, 0, 0]}
           >
              <boxGeometry/>
              <meshStandardMaterial color="black" />
          </mesh> 
  {/*         <mesh receiveShadow position-x = { 4 } position-y={ 0 } position-z={0} rotation-y={29.80} rotation-x={ 0 } scale={ 29 }>
              <planeGeometry />
              <meshStandardMaterial color="limegreen" />
          </mesh>
     
          <mesh receiveShadow position-x = { 15 } position-y={ 0 } position-z={0} rotation-y={29.80} rotation-x={ 0 } scale={ 29 }>
              <planeGeometry />
              <meshStandardMaterial color="limegreen" />
          </mesh>
  
          <mesh receiveShadow position-x = { 1 } position-y={ 0 } position-z={11} rotation-x={ 0 } scale={ 29 }>
              <planeGeometry />
              <meshStandardMaterial color="red" />
          </mesh>
         */}
          
          
             
                  <Suspense
                          fallback={ <Placeholder position-y ={0.5} scale={[2, 3, 2]}/>}>
                  
                      {/* <Room/> */}
                  
                  </Suspense>
              
            
  
          
  
      </>
  }
  
