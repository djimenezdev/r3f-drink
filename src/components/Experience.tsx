import { Center, Environment, Float, Scroll } from "@react-three/drei";
import { Can } from "./Can";
import { suspend } from "suspend-react";
import Lights from "./Lights";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";
import IntroText from "./IntroText";
import { TextProps } from "../textType";
import Interface from "./Interface";

const warehouse = import("@pmndrs/assets/hdri/warehouse.exr"!).then(
  (module) => module.default
);

const Experience = () => {
  const canProps = useControls("Can Model", {
    position: {
      value: [0, -1.2, 0],
      step: 0.1,
    },
    scale: {
      value: 0.3,
      min: 0.1,
      max: 10,
      step: 0.05,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });

  const centerRef = useRef<THREE.Vector3>(null!);
  const enjoyRef = useRef<TextProps>(null!);
  const paradiseRef = useRef<TextProps>(null!);

  return (
    <>
      <Center
        onCentered={({ center }) => {
          centerRef.current = center;
        }}
      >
        <Scroll>
          <Float>
            <Can canProps={{ ...canProps }} canNumber={1} />
          </Float>
        </Scroll>
        <Float floatIntensity={1} rotationIntensity={0.2} speed={2}>
          <Can
            canProps={{ ...canProps, position: [0, -1, -0.5] }}
            canNumber={2}
          />
        </Float>
        {/* html interface */}
        <Scroll html>
          <Interface />
        </Scroll>
        <Lights />
        <Environment files={suspend(warehouse) as string | string[]} />
      </Center>
      <IntroText enjoyRef={enjoyRef} paradiseRef={paradiseRef} />
    </>
  );
};
export default Experience;
