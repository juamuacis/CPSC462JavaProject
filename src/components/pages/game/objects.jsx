import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function cube() {
    return (
      <Canvas>
        <Box args={[1, 1, 1]} color="red" />
      </Canvas>
    );
  }

