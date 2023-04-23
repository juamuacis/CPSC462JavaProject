

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Room(props) {
  const room = useGLTF("./KingHall/scene.gltf");
  
  return <primitive 
  object={room.scene}
  scale = {2.1}
  position = { [ .5, 3.2 ,-18]}
  
  
  />
  }

useGLTF.preload("./KingHall/scene.gltf");
