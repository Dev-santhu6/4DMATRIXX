import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlowingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const innerCubeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x += 0.003;
      edgesRef.current.rotation.y += 0.005;
    }
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x -= 0.005;
      innerCubeRef.current.rotation.y -= 0.007;
    }
  });

  const edgesMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#00FF57'),
      linewidth: 2,
      transparent: true,
      opacity: 1,
    });
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Outer glowing cube edges */}
        <lineSegments ref={edgesRef}>
          <edgesGeometry args={[new THREE.BoxGeometry(2.5, 2.5, 2.5)]} />
          <primitive object={edgesMaterial} />
        </lineSegments>

        {/* Main transparent cube */}
        <mesh ref={meshRef}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            thickness={0.5}
            chromaticAberration={0.1}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={0.5}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color="#00FF57"
            transmission={0.9}
            roughness={0.1}
            ior={1.5}
          />
        </mesh>

        {/* Inner rotating cube */}
        <mesh ref={innerCubeRef} scale={0.6}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#00FF57"
            emissive="#00FF57"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>

        {/* Core glow */}
        <mesh scale={0.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#00FF57"
            emissive="#00FF57"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Ambient glow particles */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={100}
              array={new Float32Array(
                Array.from({ length: 300 }, () => (Math.random() - 0.5) * 5)
              )}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color="#00FF57"
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  );
};

const Hero3DCube = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FF57" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0AFF8C" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#00FF57"
        />
        <GlowingCube />
      </Canvas>
    </div>
  );
};

export default Hero3DCube;
