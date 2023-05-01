import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import {KeyboardControls} from '@react-three/drei'


export default function Home() {
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
                        position: [ 0, 0, 0 ]
                    } }
                >
                    <Experience />
                </Canvas>
            </KeyboardControls>
        </div>
    ) 
}