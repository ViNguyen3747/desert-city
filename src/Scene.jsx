import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Center,
  useAnimations,
  useScroll,
  Sparkles,
} from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
export default () => {
  const scroll = useScroll();

  const { scene, animations } = useGLTF("./scene.glb");
  const animation = useAnimations(animations, scene);
  useEffect(() => {
    Object.values(animation.actions).forEach((action) => {
      action.play().paused = true;
    });
  }, []);
  useFrame((state, delta) => {
    Object.values(animation.actions).forEach((action) => {
      const offset = scroll.offset;
      action.time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset,
        30,
        delta
      );
    });
    const empty = animation.ref.current.children.find(
      (child) => child.name === "Empty"
    );
    const camera = animation.ref.current.children.find(
      (child) => child.name === "camera"
    );
    const emptyPosition = empty.position;
    const cameraPosition = new THREE.Vector3();
    cameraPosition.y = -8;
    cameraPosition.z = 30;
    cameraPosition.x = emptyPosition.x;
    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(emptyPosition);
  });
  return (
    <>
      <Center>
        <Sparkles
          size={30}
          scale={[50, 10, 10]}
          position-y={5}
          speed={0.7}
          count={45}
        />
        <primitive object={scene} />
      </Center>
    </>
  );
};

useGLTF.preload("./scene.glb");
