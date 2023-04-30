import { useGLTF} from "@react-three/drei";
import Frames from "./Frames";

export default function Room( props ) {
    const hallway = useGLTF("/gallery/scene.gltf");
    console.log(hallway);
    const { nodes } = hallway;
    const paintings = nodes.paintings;
    console.log(paintings.position);

    return (
    <primitive
        object={ hallway.scene }
        scale={ 2 }
        position={ [ - 2.5, 0, 2.5 ] }
    >
        <Frames />


    </primitive>
    )
}

useGLTF.preload("/gallery/scene.gltf");