import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  const { camera, gl } = useThree();

  extend({ OrbitControls });

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  }, []);

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={groupRef}>
        <mesh position-x={1.5} scale={1.5} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh position-x={-1.5}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
