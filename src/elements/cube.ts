import { Mesh, MeshBuilder, Scene } from "@babylonjs/core";

export function createCube(scene: Scene, size: number): Mesh {
  const cube = MeshBuilder.CreateBox(
    "cube",
    {
      size,
    },
    scene
  );

  // cube.position = new Vector3(0, 1, 0);

  // cube.physicsImpostor = new PhysicsImpostor(
  //   cube,
  //   PhysicsImpostor.BoxImpostor,
  //   {
  //     mass: 1,
  //     restitution: 0.9,
  //   },
  //   scene
  // );

  return cube;
}
