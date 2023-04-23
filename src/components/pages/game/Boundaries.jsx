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
            <mesh scale={[24, 10, 1]} position={[0, 5, -15]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" />
            </mesh> 

                {/*Front Wall */}
                <mesh scale={[24, 10, 1]} position={[0, 5, 15]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" />
            </mesh> 

                    {/*Right Wall */}
                    <mesh scale={[1, 10, 30]} position={[12, 5, 0]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" />
            </mesh> 

                    {/*Left Wall */}
                    <mesh scale={[1, 10, 30]} position={[-12, 5, 0]}
            >
                <boxGeometry/>
                <meshStandardMaterial color="ivory" />
            </mesh> 
        </RigidBody>

    </>
}