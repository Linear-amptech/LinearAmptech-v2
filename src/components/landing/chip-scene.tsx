"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingChip() {
  const chipRef = useRef<Mesh>(null);
  const waferRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (chipRef.current) {
      chipRef.current.rotation.x =
        -0.38 + pointer.y * 0.18 + Math.sin(elapsed * 0.7) * 0.05;
      chipRef.current.rotation.y = 0.58 + pointer.x * 0.25 + elapsed * 0.08;
      chipRef.current.position.y = Math.sin(elapsed * 1.2) * 0.12;
    }
    if (waferRef.current) {
      waferRef.current.rotation.z = elapsed * 0.14;
      waferRef.current.rotation.x = 1.28;
    }
  });

  return (
    <group>
      <mesh ref={waferRef} position={[0, -0.12, -0.5]}>
        <torusGeometry args={[1.92, 0.018, 32, 160]} />
        <meshStandardMaterial
          color="#52e4ff"
          emissive="#0b6c88"
          emissiveIntensity={0.45}
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0, -0.12, -0.5]} rotation={[1.28, 0, 0]}>
        <circleGeometry args={[1.82, 96]} />
        <meshStandardMaterial
          color="#09182a"
          emissive="#042037"
          emissiveIntensity={0.22}
          metalness={0.72}
          roughness={0.18}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={chipRef}>
        <boxGeometry args={[2.15, 1.45, 0.16]} />
        <meshStandardMaterial
          color="#0b1420"
          emissive="#052b44"
          emissiveIntensity={0.38}
          metalness={0.96}
          roughness={0.2}
        />
      </mesh>
      {Array.from({ length: 18 }).map((_, index) => {
        const x = -1.22 + index * 0.144;
        return (
          <mesh key={`pin-top-${index}`} position={[x, 0.84, 0.02]}>
            <boxGeometry args={[0.052, 0.18, 0.045]} />
            <meshStandardMaterial
              color="#b8f3ff"
              emissive="#2bdcff"
              emissiveIntensity={0.45}
              metalness={0.5}
            />
          </mesh>
        );
      })}
      {Array.from({ length: 18 }).map((_, index) => {
        const x = -1.22 + index * 0.144;
        return (
          <mesh key={`pin-bottom-${index}`} position={[x, -0.84, 0.02]}>
            <boxGeometry args={[0.052, 0.18, 0.045]} />
            <meshStandardMaterial
              color="#d7f8ff"
              emissive="#27b9ff"
              emissiveIntensity={0.4}
              metalness={0.5}
            />
          </mesh>
        );
      })}
      {Array.from({ length: 10 }).map((_, index) => {
        const y = -0.6 + index * 0.133;
        return (
          <mesh key={`trace-${index}`} position={[0, y, 0.095]}>
            <boxGeometry
              args={[1.52 - Math.abs(index - 4.5) * 0.08, 0.014, 0.01]}
            />
            <meshStandardMaterial
              color="#69efff"
              emissive="#00bfff"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.72, 0.46, 0.035]} />
        <meshStandardMaterial
          color="#12263d"
          emissive="#0a85a8"
          emissiveIntensity={0.55}
          metalness={0.75}
          roughness={0.18}
        />
      </mesh>
      <pointLight position={[0, 0, 1.7]} color="#66e7ff" intensity={2.2} />
    </group>
  );
}

export function ChipScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.25, 4.6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 3]} intensity={2.2} color="#dffaff" />
      <FloatingChip />
    </Canvas>
  );
}
