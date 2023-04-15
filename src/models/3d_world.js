

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import * as dat from 'lil-gui'




/**
 * Base
*/
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene();




    
/**
 * Floor
*/
   const floor = new THREE.Mesh(
   new THREE.PlaneGeometry(10, 100),
   new THREE.MeshStandardMaterial({
       color: '#444444',
       metalness: 0,
       roughness: 0.5
    })
    )
    floor.receiveShadow = true
    floor.rotation.x = - Math.PI * .5
    // scene.add(floor)
    
    /**
     * Lights
    */
    // No need
   
   /**
    * Sizes
   */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
        
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
        
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    
    /**
     * Camera
    */
   // Base camera
   const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
   camera.position.set(0, 0, 5)
   scene.add(camera)
   
   // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.target.set(0, 0.75, 0)
    // controls.enableDamping = true
    const controls = new PointerLockControls(camera, document.body);
    scene.add(controls.getObject());

/**
 * Models
*/
const gltfLoader = new GLTFLoader();
gltfLoader.load(
    '/models/KingHall/scene.gltf',
    (gltf) =>
    {
        console.log(gltf);
        scene.add(gltf.scene);
        // Calculate the bounding box of the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // // Position the camera
        // const cameraDistance = boxSize / (2 * Math.tan((camera.fov * Math.PI) / 360));
        // camera.position.set(boxCenter.x, boxCenter.y, boxCenter.z + cameraDistance * 0.5);
        camera.lookAt(boxCenter);

        // Update the controls' target to the center of the model
        controls.target.copy(boxCenter);

    },
    (progress) =>
    {
        console.log('progress');
        console.log(progress);
    },
    (error) =>
    {
        console.log('error');
        console.log(error);
    }
)
    /**
     * Renderer
    */
   const renderer = new THREE.WebGLRenderer({
       canvas: canvas
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    // Enable pointer lock when the canvas is clicked
    renderer.domElement.addEventListener('click', () => {
    controls.lock();
    });
    
    // Key movements
    const keys = {};

    document.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    });

    document.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    });

    function updateControls(delta) {
    const speed = 5; // Adjust speed as desired

    if (keys['KeyW']) controls.moveForward(speed * delta);
    if (keys['KeyS']) controls.moveForward(-speed * delta);
    if (keys['KeyA']) controls.moveRight(-speed * delta);
    if (keys['KeyD']) controls.moveRight(speed * delta);
    }


    /**
     * Animate
    */
   const clock = new THREE.Clock()
   let previousTime = 0
   
   const tick = () =>
   {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Update controls
    // controls.update()
    updateControls(deltaTime)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
   }

tick()

*/