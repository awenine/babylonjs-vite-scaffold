import "@babylonjs/core/Debug/debugLayer"
import "@babylonjs/inspector"
import "@babylonjs/node-editor"
//! ONLY IMPORT ABOVE 2 FOR DEV, DONT BUNDLE
import Ammo from "ammojs-typed";
import { AmmoJSPlugin, Scene, Vector3 } from "@babylonjs/core";
import { engine } from "./engine";
import { populateDefaultScene } from "./scenes/default/defaultScene";
import { scene } from "./scene";
import { canvas } from "./domItems";

async function main(): Promise<void> {
  const ammo = await Ammo();
  const physics = new AmmoJSPlugin(true, ammo);
  
  //* ENABLE PHYSICS
  scene.enablePhysics(new Vector3(0, -9.81, 0), physics);
  
  //* CHANGE SCENE HERE
  populateDefaultScene(scene, canvas)

  //* HIDE / SHOW THE INSPECTOR
  //! NOT WORKING, THINKS INSPECTOR IS ALWAYS VISIBLE..?
  window.addEventListener("keydown", (ev) => {
    // Shift + Ctrl + Alt + I
    if (ev.shiftKey && ev.altKey && ev.ctrlKey && ev.keyCode === 73) {
      if (scene.debugLayer.isVisible) {
        scene.debugLayer.hide();
      } else {
        scene.debugLayer.show();
      }
    }
  })

  //* RENDER SCENE
  engine.runRenderLoop(() => scene.render());
}

main();
