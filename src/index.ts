import "@babylonjs/core/Debug/debugLayer"
import "@babylonjs/inspector"
import "@babylonjs/node-editor"
import { Scene } from "@babylonjs/core";
import { engine } from "./engine";
import { defaultScene } from "./scenes/default/defaultScene";

async function main(): Promise<void> {

  //* CHANGE SCENE HERE
  const displayScene: Scene = defaultScene;

  //* HIDE / SHOW THE INSPECTOR
  //! NOT WORKING, THINKS INSPECTOR IS ALWAYS VISIBLE..?
  window.addEventListener("keydown", (ev) => {
    // Shift + Ctrl + Alt + I
    if (ev.shiftKey && ev.altKey && ev.ctrlKey && ev.keyCode === 73) {
      if (displayScene.debugLayer.isVisible) {
        displayScene.debugLayer.hide();
      } else {
        displayScene.debugLayer.show();
      }
    }
  })

  //* RENDER SCENE
  engine.runRenderLoop(() => displayScene.render());
}

main();
