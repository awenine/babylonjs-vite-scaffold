import { HemisphericLight, Scene, Vector3 } from "@babylonjs/core";

export function createLight(scene: Scene): void {
  new HemisphericLight("light", new Vector3(1, 1, 0), scene);
}