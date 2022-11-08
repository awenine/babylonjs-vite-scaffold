import { Mesh, MeshBuilder, PhysicsImpostor } from "@babylonjs/core";

export function createGround(scene, size): Mesh {
  const ground = MeshBuilder.CreateGround(
    "ground",
    {
      width: size,
      height: size,
    },
    scene
  );

  ground.physicsImpostor = new PhysicsImpostor(
    ground,
    PhysicsImpostor.BoxImpostor,
    {
      mass: 0,
      restitution: 0.9,
    },
    scene
  );

  return ground;
}
