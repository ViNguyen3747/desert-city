import { useFrame } from "@react-three/fiber";
import { useGLTF, Center, useAnimations, useScroll } from "@react-three/drei";
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
  }, [animation]);
  console.log(scene);
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
    const emptyPosition = empty.position;
    const cameraPosition = new THREE.Vector3();
    cameraPosition.y = -7;
    cameraPosition.z = 30;
    cameraPosition.x = emptyPosition.x;
    state.camera.position.copy(cameraPosition);
  });
  return (
    <>
      <Center>
        <primitive object={scene} />
      </Center>
    </>
  );
};
