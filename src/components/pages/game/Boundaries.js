import {RigidBody} from '@react-three/rapier'

export default function Boundaries(){

    {/* Walls */}
    return<>
    
        <RigidBody type = 'fixed' 
            restitution={0.2} 
            friction={ 0 }>

        {/* Floor */}
            <mesh 
                scale={[9, .1, 65]} 
                position={[-3, 0 , 3]}
            >
                <boxGeometry/>
                <meshStandardMaterial 
                    color="black" 
                    opacity={.1} transparent />
            </mesh> 


        {/*Back Wall */}    
            <mesh 
                scale={[9, 10, 1]} 
                position={[-2.5, 5, -30]}
            >
                <boxGeometry/>
                <meshStandardMaterial 
                    color="ivory" 
                    opacity={.1} transparent/>
            </mesh> 

        {/*Front Wall */}

            <mesh 
                scale={[9, 10, 1]} 
                position={[-2.5, 5, 35]}
            >
                <boxGeometry/>
                <meshStandardMaterial 
                    color="ivory" 
                    opacity={.1} transparent/>
            </mesh> 
             
        {/*Right Wall */}

            <mesh 
                scale={[1, 10, 65]} 
                position={[2, 5, 3]}
            >
                <boxGeometry/>
                <meshStandardMaterial 
                color="ivory" 
                opacity={.1} transparent/>
            </mesh> 

        {/*Left Wall */}

            <mesh 
                scale={[1, 10, 65]} 
                position={[-7, 5, 3]}
            >
                <boxGeometry/>
                <meshStandardMaterial 
                    color="black" 
                    opacity={.1} transparent/>
            </mesh> 
             
        </RigidBody>
        
    </>
}