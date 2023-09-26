import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import Header from "./components/Header";

function App() {
  const isDebug = new URLSearchParams(window.location.search).get("debug");
  return (
    <div className="App">
      <Leva hidden={isDebug !== "true"} />
      <Header />
      <Canvas shadows>
        <Suspense fallback={null}>
          <ScrollControls pages={2}>
            <Experience />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
