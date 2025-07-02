
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const DrillingMachine = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
      {/* Main chassis */}
      <Box position={[0, -0.5, 0]} args={[3, 0.5, 1.5]}>
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Drilling tower */}
      <Box position={[0, 1, 0]} args={[0.3, 3, 0.3]}>
        <meshStandardMaterial color="#e53e3e" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Drill bit housing */}
      <Cylinder position={[0, -1, 0]} args={[0.2, 0.15, 0.8]} rotation={[0, 0, 0]}>
        <meshStandardMaterial color="#4a5568" metalness={0.9} roughness={0.1} />
      </Cylinder>
      
      {/* Engine block */}
      <Box position={[-1, 0, 0]} args={[1, 0.8, 0.8]}>
        <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
      </Box>
      
      {/* Control cabin */}
      <Box position={[1.2, 0.5, 0]} args={[0.8, 1, 0.8]}>
        <meshStandardMaterial color="#4299e1" metalness={0.3} roughness={0.7} />
      </Box>
      
      {/* Hydraulic cylinders */}
      <Cylinder position={[-0.5, 0.5, 0.8]} args={[0.1, 0.1, 1]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#ed8936" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder position={[0.5, 0.5, 0.8]} args={[0.1, 0.1, 1]} rotation={[Math.PI/2, 0, 0]}>
        <meshStandardMaterial color="#ed8936" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Tracks/wheels */}
      <Cylinder position={[-1.2, -0.8, 0.6]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </Cylinder>
      <Cylinder position={[-1.2, -0.8, -0.6]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </Cylinder>
      <Cylinder position={[1.2, -0.8, 0.6]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </Cylinder>
      <Cylinder position={[1.2, -0.8, -0.6]} args={[0.3, 0.3, 0.2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </Cylinder>
      
      {/* Warning lights */}
      <Sphere position={[0, 2.5, 0]} args={[0.1]}>
        <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere position={[-0.3, 2.3, 0]} args={[0.08]}>
        <meshStandardMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0.3, 2.3, 0]} args={[0.08]}>
        <meshStandardMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
};

export default DrillingMachine;
