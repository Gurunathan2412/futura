import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF,Environment } from "@react-three/drei";
import CanvasLoader from "../Loader";



export const Models2 = ({ isMobile }) => {
  const Model = useGLTF("./shield1/scene.gltf");

  return (
    <mesh>
  
        <ambientLight intensity={2}/>
      <primitive
        object={Model.scene}
        scale={isMobile ? 0 : 1}
        position={isMobile ? [0, 0, -0.2] : [0, 1, -1.5]}
        rotation={[0, 0.6, 0]}
      />
    </mesh>
  );
};

const ModelsCanvas2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 10px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Models2 />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ModelsCanvas2;
