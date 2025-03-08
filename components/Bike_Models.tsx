"use client";

import bike_style from "@/styles/Bike.module.scss";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from "gsap";

export const BikeMain = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // GLTF Model setup
        const loader = new GLTFLoader();
        loader.load('/bike_models/home_bike/scene.gltf', (gltf) => {
            const model = gltf.scene;
            model.scale.set(2, 2, 2); // Scale the model
            scene.add(model);

            // GSAP animations for the model
            const tl = gsap.timeline({ defaults: { duration: 1 } });
            tl.fromTo(model.scale, { z: 0, x: 0, y: 0 }, { z: 2, x: 2, y: 2 });
        });

        // Light setup
        const light = new THREE.PointLight(0xffffff, 100, 100);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Adjust intensity as needed
        light.position.set(0, 10, 10);
        light.intensity = 1000;
        scene.add(light);
        scene.add(ambientLight);

        // Camera setup
        const container = containerRef.current!;
        const { clientWidth: width, clientHeight: height } = container;
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.z = 8.65;
        camera.position.y = 5.5;
        scene.add(camera);

        // Renderer setup
        const canvas = canvasRef.current!;
        const maxPixelRatio = 2; 
        const renderer = new THREE.WebGLRenderer({ 
            canvas, alpha: true,
            antialias: true,
            depth: true,
            stencil: false,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
            logarithmicDepthBuffer: true 
        });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
        canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            console.warn("WebGL Context Lost! Attempting to recover...");
        
            setTimeout(() => {
                location.reload();  // Quick recovery
            }, 1000);
        });
        if (!renderer.capabilities.isWebGL2) {
            console.warn("WebGL 2 is not supported. Falling back to WebGL 1.");
        }

        // OrbitControls setup
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 4;       // Updated Roate Speed from 5 to 4
        controls.update();

        // Lock rotation to the X-axis only
        controls.minPolarAngle = Math.PI / 2.5; // Prevent camera from moving below the X-axis
        controls.maxPolarAngle = Math.PI / 2.5; // Prevent camera from moving above the X-axis

        // Handle window resize
        const handleResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Animation loop
        const loop = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(loop);
        };
        loop();

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={bike_style.parent_container}>
            <div ref={containerRef} className={bike_style.container}>
                <canvas ref={canvasRef} className={bike_style.webgl}></canvas>
            </div>
        </div>
    );
};