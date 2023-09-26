import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import { TextProps } from "../textType";

type IntroTextProps = {
  enjoyRef: React.MutableRefObject<TextProps>;
  paradiseRef: React.MutableRefObject<TextProps>;
};

const IntroText = ({ enjoyRef, paradiseRef }: IntroTextProps) => {
  const { enjoyPosition, paradisePosition, enjoyFontSize, paradiseFontSize } =
    useControls("Text", {
      enjoyPosition: {
        value: [-4.7, -1, -0.5],
        step: 0.1,
      },
      paradisePosition: {
        value: [4.7, -1, -0.5],
        step: 0.1,
      },
      enjoyFontSize: {
        value: 1.25,
        min: 0.1,
        max: 10,
        step: 0.05,
      },
      paradiseFontSize: {
        value: 1.1,
        min: 0.1,
        max: 10,
        step: 0.05,
      },
    });

  const scrollData = useScroll();

  useFrame((_state, delta) => {
    const offset = scrollData.offset;
    if (!enjoyRef.current || !paradiseRef.current) return;
    enjoyRef.current.fillOpacity = THREE.MathUtils.lerp(
      enjoyRef.current.fillOpacity!,
      offset < 0.4 ? 1 : 0,
      delta * 2
    );
    paradiseRef.current.fillOpacity = THREE.MathUtils.lerp(
      paradiseRef.current.fillOpacity!,
      offset < 0.4 ? 1 : 0,
      delta * 2
    );
  });

  // for responsiveness on desktop screens, can utilize viewport from useTHREE hook to keep text in frame until it reaches a certain size
  // on tablet and mobile, will move text above and below can instead of left and right
  return (
    <>
      <Text
        ref={enjoyRef}
        position={enjoyPosition}
        fontSize={enjoyFontSize}
        font="/fonts/regular/HoboNo2.ttf"
        characters="Enjoy"
        fillOpacity={0}
      >
        Enjoy
        <meshStandardMaterial toneMapped={false} />
      </Text>
      <Text
        ref={paradiseRef}
        position={paradisePosition}
        fontSize={paradiseFontSize}
        font="/fonts/regular/HoboNo2.ttf"
        characters="pradise"
        fillOpacity={0}
      >
        Paradise
        <meshStandardMaterial toneMapped={false} />
      </Text>
    </>
  );
};
export default IntroText;
