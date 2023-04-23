

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Room(props) {
  const room = useGLTF("./KingHall/scene.gltf");
  
  return <primitive 
  object={room.scene}
  scale = {1}
  position = { [ 10, 1.5, -5]}
  //rotation-y={0}
  
  />
  }

useGLTF.preload("./KingHall/scene.gltf");
