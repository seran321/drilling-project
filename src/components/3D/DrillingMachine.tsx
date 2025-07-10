import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

const DrillingMachine = () => {
  const { scene } = useGLTF('/model/scene.gltf'); // Make sure filename matches

  return <primitive object={scene} scale={0.8} />;
};

export default DrillingMachine;
