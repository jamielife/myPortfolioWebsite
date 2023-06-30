import React, {useState, useEffect} from "react";
import {Scene, MeshPhongMaterial, PerspectiveCamera, BoxBufferGeometry, AmbientLight, PointLight } from "three";
import ExpoTHREE, { Renderer } from "expo-three";
import {GLView} from "expo-gl";
import OrbitControlsView from 'expo-three-orbit-controls';
import { render } from "react-dom";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bowl = () => {    
    const [camera, setCamera] = useState();
    const model = null;

    let timeout;
  
    useEffect(() => {
      // Clear the animation loop when the component unmounts
      return () => clearTimeout(timeout);
    }, []);
  
    const onContextCreate = async (gl) => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(
            50,
            gl.drawingBufferWidth/gl.drawingBufferHeight,
            .1,
            1000
        );
        const quickSetPosition = 7;
        camera.position.set(quickSetPosition, quickSetPosition, 8.5);
        setCamera(camera);

        gl.canvas.setSize = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight}

        const renderer = new Renderer({gl});
        //renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight)
        
        var model;
        const loader = new GLTFLoader();
        loader.load(require('../assets/ramen.glb'), function (gltf) { 
            model = gltf.scene;
            //model.castShadow = true;
            scene.add (model);
        }, undefined, function(error){
            console.log(error);
        });

        const ambientLight = new AmbientLight();
        scene.add(ambientLight);

        //const pointLight = new PointLight();
        //pointLight.position.set(20,2,10);
        //scene.add(pointLight);

        const render = () => {
            requestAnimationFrame(render);
            //cube.rotation.x += 0.01;
            if(model){
                model.position.y = -2;
                model.rotation.y += 0.0025;
            }         
            renderer.render(scene, camera);
            gl.endFrameEXP();
        }

        render();
    };    
    
    return (
            <OrbitControlsView style={{ flex: 1 }} camera={camera}>
            <GLView               
                onContextCreate={onContextCreate}
                style={{width: 640, height: 640, backgroundColor: "transparent" }}
            />
            </OrbitControlsView>    
    );
}

export default Bowl;
