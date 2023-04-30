<<<<<<< HEAD
<<<<<<< Updated upstream
/* import './style.css' */ 
/* import ReactDOM from 'react-dom' */
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {KeyboardControls, PerspectiveCamera, PointerLockControls} from '@react-three/drei'
import { QuestionAnswerOutlined } from '@mui/icons-material';
import Questions from './Questions';
=======
import { Canvas} from '@react-three/fiber';
import Experience from './Experience.js';
import { KeyboardControls } from '@react-three/drei';
>>>>>>> Stashed changes
=======
import { Canvas, useThree } from '@react-three/fiber';
import Experience from './Experience.js';
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2


<<<<<<< HEAD
<<<<<<< Updated upstream
    
    return (
        <div id="root">      
             <KeyboardControls
=======
export default function Home() {
  return (
    <div id="root">
       <KeyboardControls
>>>>>>> Stashed changes
    map={[
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "left", keys: ["ArrowLeft", "a", "A"] },
      { name: "right", keys: ["ArrowRight", "d", "D"] },
      { name: "jump", keys: ["Space"] },
    ]}>
<<<<<<< Updated upstream
                
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
                <PointerLockControls/>
                </Canvas>
            </KeyboardControls>
        </div>
    )  
=======
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
    </div>
  )
>>>>>>> Stashed changes
=======
export default function Home() {
  return (
    <div id="root">
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
    </div>
  )
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2
}
