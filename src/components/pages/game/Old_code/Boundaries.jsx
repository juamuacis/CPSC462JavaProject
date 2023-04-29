import { Physics, Debug, RigidBody, CuboidCollider} from '@react-three/rapier'
import * as THREE from 'three'

export default function Boundaries(){

    return<>
              {/*Floor*/ }
              <RigidBody type="fixed">
                <mesh >
                    <boxGeometry args={[24, .5, 30]}/>
                    <meshStandardMaterial color="ivory"/>
                </mesh>
                <CuboidCollider args={[30, .5, 30]} restitution={.2} friction={1} />
            </RigidBody>

  
     
     {/* Walls */}

        <RigidBody type = 'fixed' restitution={0.2} friction={ 0 }>
            {/*Back Wall */}
            <mesh scale={[24, 10, 1]} position={[0, 5, -12]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 

                {/*Front Wall */}
                <mesh scale={[23, 10, 1]} position={[0, 5, 13]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.01} transparent/>
            </mesh> 

                    {/*Right Wall */}
                    <mesh scale={[1, 10, 30]} position={[8, 5, 0]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 

                    {/*Left Wall */}
                    <mesh scale={[1, 10, 30]} position={[-9, 5, 0]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 
        </RigidBody>

    </>
}