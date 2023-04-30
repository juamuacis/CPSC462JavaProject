import { Physics, Debug, RigidBody, CuboidCollider} from '@react-three/rapier'
import * as THREE from 'three'

export default function ShowroomBoundaries(){

    return<>
              {/*Floor*/ }
              <RigidBody type="fixed">
                <mesh position={[0, 0, 0]} >
                    <boxGeometry args={[60, .5, 28]} />
                    <meshStandardMaterial color="brown" opacity={.1} transparent/>
                </mesh>
                <CuboidCollider args={[30, .5, 30]} restitution={.2} friction={1} />
            </RigidBody>

  
     
     {/* Walls */}

        <RigidBody type = 'fixed' restitution={0.2} friction={ 0 }> 
            {/*Back Wall */}
            <mesh scale={[60, 10, 1]} position={[0, 5, -13]}>
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 

                {/*Front Wall */}
                 <mesh scale={[60, 10, 1]} position={[0, 5, 13]}>
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent/>
            </mesh>  

                {/*Right Wall */}
                <mesh scale={[1, 10, 26]} position={[30, 5, 0]}>
            
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 

                    {/*Left Wall */}
            <mesh scale={[1, 10, 26]} position={[-30, 5, 0]}>
                <boxGeometry/>
                <meshStandardMaterial color="ivory" opacity={.1} transparent />
            </mesh> 

        </RigidBody> 

    </>
}