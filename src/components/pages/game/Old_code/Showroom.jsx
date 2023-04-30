import { useGLTF } from "@react-three/drei";


export default function Showroom(props){

    const room = useGLTF("./Showroom/scene.gltf");
  

    return < primitive 
  object={room.scene}
  scale = {5}
  position = { [ 0, 15, 0]}/>


  }

  
useGLTF.preload("./Showroom/scene.gltf");
    