import React from 'react';
import { Text } from '@react-three/drei';

const Questions = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => (
        <Text
          key={index}
          position={[0, -index * 0.5, 0]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          {question}
        </Text>
      ))}
    </>
  );
};

export default Questions;