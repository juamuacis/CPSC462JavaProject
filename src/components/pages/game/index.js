/* import './style.css' */ 
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {KeyboardControls} from '@react-three/drei'

/* const root = ReactDOM.createRoot(document.getElementById('root')) 
  
 */
export default function Game3D ({game}) {

<return>
       
root.render(
    <KeyboardControls
    map={[
        {name:'forward', keys: ['ArrowUp', 'KeyW'] },
        {name:'backward', keys: ['ArrowDown', 'KeyS'] },
        {name:'leftward', keys: ['ArrowLeft', 'KeyA'] },
        {name:'rightward', keys: ['ArrowRight', 'KeyD'] },
        {name:'jump', keys: ['Space'] },
    ]}>
        
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ - 4, 3, 6 ]
            } }
        >
            
            <Experience />
        </Canvas>
    </KeyboardControls>
)
  </return>
  }
  