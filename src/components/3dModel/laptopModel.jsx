import React, { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";

const LaptopModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Get the canvas element
    const canvas = canvasRef.current;

    // Create an engine
    const engine = new BABYLON.Engine(canvas, true);

    // Create a basic scene
    const createScene = () => {
      const scene = new BABYLON.Scene(engine);

      // Add a camera
      const camera = new BABYLON.ArcRotateCamera(
        "camera",
        Math.PI / 2,
        Math.PI / 3,
        4,
        new BABYLON.Vector3(0, 0, 0),
        scene,
      );
      camera.attachControl(canvas, true);

      // Add a light
      const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(1, 1, 0),
        scene,
      );

      // Load the GLB model
      BABYLON.SceneLoader.Append(
        "/models/",
        "laptop.glb",
        scene,
        () => {
          console.log("Model loaded successfully");
        },
        null,
        (error) => {
          console.error("Error loading model:", error);
        },
      );

      return scene;
    };

    // Create the scene
    const scene = createScene();

    // Render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle resize
    window.addEventListener("resize", () => {
      engine.resize();
    });

    // Clean up
    return () => {
      engine.dispose();
      window.removeEventListener("resize", () => engine.resize());
    };
  }, []);

  return <canvas ref={canvasRef} className="h-[400px] w-[500px]"></canvas>;
};

export default LaptopModel;
