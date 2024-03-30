import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // group different lights and lightformers. We can use group to organize lights, cameras, meshes, and other objects in the scene.
    <group name="lights">
      {/**
       * @description Environment is used to create a background environment for the scene
       * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
       */}
      <Environment resolution={256}>
        <group>
          {/**
           * @description Lightformer used to create custom lights with various shapes and properties in a 3D scene.
           * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
           */}
          <Lightformer
            form="rect"
            intensity={10}
            position={[-1, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/**
       * @description spotLight is used to create a light source positioned at a specific point
       * in the scene that emits light in a specific direction.
       * https://threejs.org/docs/#api/en/lights/SpotLight
       */}
      <spotLight
        // eslint-disable-next-line react/no-unknown-property
        position={[-2, 10, 5]}
        // eslint-disable-next-line react/no-unknown-property
        angle={0.15}
        // eslint-disable-next-line react/no-unknown-property
        penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
        // eslint-disable-next-line react/no-unknown-property
        decay={0} // the amount the light dims as it moves away from the source
        // eslint-disable-next-line react/no-unknown-property
        intensity={Math.PI * 0.2} // the light intensity
        color={"#f8f9fa"}
      />
      <spotLight
        // eslint-disable-next-line react/no-unknown-property
        position={[0, -25, 10]}
        // eslint-disable-next-line react/no-unknown-property
        angle={0.15}
        // eslint-disable-next-line react/no-unknown-property
        penumbra={1}
        // eslint-disable-next-line react/no-unknown-property
        decay={0}
        // eslint-disable-next-line react/no-unknown-property
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        // eslint-disable-next-line react/no-unknown-property
        position={[0, 15, 5]}
        // eslint-disable-next-line react/no-unknown-property
        angle={0.15}
        // eslint-disable-next-line react/no-unknown-property
        penumbra={1}
        // eslint-disable-next-line react/no-unknown-property
        decay={0.1}
        // eslint-disable-next-line react/no-unknown-property
        intensity={Math.PI * 3}
      />
    </group>
  );
};

export default Lights;