import {
  Color4,
  Scene,
} from "@babylonjs/core";
import { canvas } from "../../domItems";
import { createCamera } from "../../elements/cameras/camera";
import { createCube } from "../../elements/cube";
import { createGround } from "../../elements/ground";
import { createLight } from "../../elements/lights/light";
import { engine } from "../../engine";

export const defaultScene = makedefaultScene(canvas);

function makedefaultScene(canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine);
  createCamera(scene, canvas);
  createLight(scene);
  createGround(scene, 4)
  const cube = createCube(scene, 0.5)
  cube.position.y = 2
  createBackground(scene);
  return scene;
}

//TODO extract to util
function createBackground(scene: Scene): void {
  scene.clearColor = Color4.FromHexString("#9384ca");
}
