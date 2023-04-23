import {userFrame} from '@react-three/fiber'
import {orbitControls} from '@react-three/drei'
import {useRef} from 'react'
import objects from Interaction


export default function Interaction()
{
    const eventHandler = () => 
    {
        console.log('the event occured')
    }
}

// {/* <mesh ref={ cube } position-x={ 2 } scale={ 1.5 } onClick={ eventHandler } >
//     <boxGeometry />
//     <meshStandardMaterial color="blue"/>
// </mesh> */}
<mesh
    ref={ cube }
    position-x={ 2 }
    scale={ 1.5 }
    onClick={ eventHandler }
    onPointerEnter={ () => { document.body.style.cursor = 'pointer' } }
    onPointerLeave={ () => { document.body.style.cursor = 'default' } }
>
    <boxGeometry />
    <meshStandardMaterial color="red"/>
</mesh>
