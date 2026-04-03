import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function RotatingIcosahedron() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 0]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.7}
      />
    </mesh>
  )
}

function InnerOrb() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = -state.clock.elapsedTime * 0.2
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.9, 0]} />
      <meshStandardMaterial
        color="#60a5fa"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

function StarField() {
  const count = 800
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12
  }

  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  )
}

export default function GeometricScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#3b82f6" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#60a5fa" />
      <StarField />
      <RotatingIcosahedron />
      <InnerOrb />
    </Canvas>
  )
}
