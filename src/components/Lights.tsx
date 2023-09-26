/* import { useHelper } from "@react-three/drei"; */
import { useRef } from "react";
import * as THREE from "three";

const Lights = () => {
  const directionalLight = useRef<THREE.DirectionalLight>(null!);
  //   useHelper(directionalLight, THREE.DirectionalLightHelper, 1, "red");
  return (
    <>
      <directionalLight
        ref={directionalLight}
        intensity={8}
        position={[-6, -2, -1]}
        castShadow
        color="#d65038"
      />
      <ambientLight intensity={2} />
    </>
  );
};
export default Lights;
