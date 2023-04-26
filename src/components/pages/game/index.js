/* import './style.css' */ 
/* import ReactDOM from 'react-dom' */
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {KeyboardControls, PerspectiveCamera, PointerLockControls} from '@react-three/drei'
import { QuestionAnswerOutlined } from '@mui/icons-material';
import Questions from './Questions';

/* const root = ReactDOM.createRoot(document.getElementById('root')) 
  
 */
export default function Game3D ({ game }) {
/*     const { questions} = game;
    console.log(questions); */
    // const { answer} = game;
    // console.log(answer);

    
    return (
        <div id="root">      
             <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "w", "W"] },
      { name: "backward", keys: ["ArrowDown", "s", "S"] },
      { name: "left", keys: ["ArrowLeft", "a", "A"] },
      { name: "right", keys: ["ArrowRight", "d", "D"] },
      { name: "jump", keys: ["Space"] },
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
                <PointerLockControls/>
                </Canvas>
            </KeyboardControls>
        </div>
    )  
}
