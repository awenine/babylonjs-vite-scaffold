import { ArcRotateCamera, Scene, Vector3 } from "@babylonjs/core";

export function createCamera(scene: Scene, canvas): void {
  //TODO - look at different cameras and how to control them
  const alpha = Math.PI / 4;
  const beta = Math.PI / 3;
  const radius = 8;
  const target = new Vector3(0, 0, 0);

  new ArcRotateCamera(
    "Camera",
    alpha,
    beta,
    radius,
    target,
    scene
  ).attachControl(canvas, true);
}