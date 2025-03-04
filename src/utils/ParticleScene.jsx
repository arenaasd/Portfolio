import { useRef, useMemo, useEffect } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";

const ParticleScene = () => {
  const particlesRef = useRef();
  const mouseRef = useRef(new THREE.Vector3());
  const count = 700;
  const explosionRef = useRef(false);
  const velocities = useRef(new Float32Array(count * 3));

  // Generate initial particle positions
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 5;
      array[i * 3 + 1] = (Math.random() - 0.5) * 5;
      array[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return array;
  }, []);

  // Mouse click triggers explosion
  useEffect(() => {
    const handleClick = (event) => {
      explosionRef.current = true;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.set(x * 5, y * 5, 0);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        velocities.current[i * 3] += Math.cos(angle) * speed * 0.5;
        velocities.current[i * 3 + 1] += Math.sin(angle) * speed * 0.5;
        velocities.current[i * 3 + 2] += (Math.random() - 0.5) * speed * 0.5;
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Animate explosion effect with slow movement when idle
  useFrame(() => {
    if (particlesRef.current) {
      const positionsArray = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const index = i * 3;
        if (explosionRef.current) {
          positionsArray[index] += velocities.current[index] * 0.1;
        if (positionsArray[index] > 5 || positionsArray[index] < -5) {
          velocities.current[index] *= -1;
        }
          positionsArray[index + 1] += velocities.current[index + 1] * 0.1;
        if (positionsArray[index + 1] > 5 || positionsArray[index + 1] < -5) {
          velocities.current[index + 1] *= -1;
        }
          positionsArray[index + 2] += velocities.current[index + 2] * 0.1;
        if (positionsArray[index + 2] > 5 || positionsArray[index + 2] < -5) {
          velocities.current[index + 2] *= -1;
        }
          velocities.current[index] = velocities.current[index] * 0.98 + (Math.random() - 0.5) * 0.005; // Slow down over time
          velocities.current[index + 1] = velocities.current[index + 1] * 0.98 + (Math.random() - 0.5) * 0.005;
          velocities.current[index + 2] = velocities.current[index + 2] * 0.98 + (Math.random() - 0.5) * 0.005;
        } else {
          // Slow floating movement when idle
          positionsArray[index] += (Math.random() - 0.5) * 0.02;
          positionsArray[index + 1] += (Math.random() - 0.5) * 0.005;
          positionsArray[index + 2] += (Math.random() - 0.5) * 0.005;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color="#fcab10" size={0.05} />
    </points>
  );
};

export default ParticleScene;
