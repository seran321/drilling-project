
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
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
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.5, 1.5]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Drilling tower */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.3, 3, 0.3]} />
        <meshStandardMaterial color="#e53e3e" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Drill bit housing */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.8]} />
        <meshStandardMaterial color="#4a5568" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Engine block */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[1, 0.8, 0.8]} />
        <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Control cabin */}
      <mesh position={[1.2, 0.5, 0]}>
        <boxGeometry args={[0.8, 1, 0.8]} />
        <meshStandardMaterial color="#4299e1" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Hydraulic cylinders */}
      <mesh position={[-0.5, 0.5, 0.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="#ed8936" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.5, 0.5, 0.8]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="#ed8936" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Tracks/wheels */}
      <mesh position={[-1.2, -0.8, 0.6]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[-1.2, -0.8, -0.6]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[1.2, -0.8, 0.6]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[1.2, -0.8, -0.6]} rotation={[0, 0, Math.PI/2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.1} roughness={0.9} />
      </mesh>
      
      {/* Warning lights */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.3, 2.3, 0]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.3, 2.3, 0]}>
        <sphereGeometry args={[0.08]} />
        <meshStandardMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

export default DrillingMachine;
