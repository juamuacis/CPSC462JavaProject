import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { PointerLockControls, FirstPersonControl, FlyControls, } from '@react-three/drei';
=======
import { PointerLockControls, FirstPersonControl, FlyControls } from '@react-three/drei';
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2
import { useFrame, useThree } from '@react-three/fiber';

export default function Pov()
{
    const controlsRef = useRef();

    useEffect(() => {

         // Enable mouse lock when the canvas is clicked
        document.addEventListener('click', controlLock);

        document.addEventListener('keydown', startWalking);
        
        document.addEventListener('keyup', stopWalking);

        return () => {
            // Enable mouse lock when the canvas is clicked
            document.removeEventListener('click', controlLock);

            document.removeEventListener('keydown', startWalking);
            
            document.removeEventListener('keyup', stopWalking);        
        }

    }, []);

    // Key press
    let movementDirection = false;

    function controlLock() {
        controlsRef.current.lock();
    }

    function controlUnlock() {
        controlsRef.current.unlock();
    }

    function stopWalking(e) {
        movementDirection = false;
    }

    function startWalking(e) {
        console.log(e.code)

        switch(e.code) {
            case "KeyF":
                controlLock();
            break;
            case "KeyR":
                controlUnlock();
            break;
            case "KeyW":
            case "ArrowUp":
                movementDirection = 'up';
                break;
            case "KeyS":
            case "ArrowDown":
                movementDirection = 'down';
                break;
            case "KeyA":
            case "ArrowLeft":
                movementDirection = 'left';
                break;
            case "KeyD":
            case "ArrowRight":
                movementDirection = 'right';
                break;
            default:
        }
    }

    // Control camera
    function updateControls(delta) {
        const speed = 20; // Adjust speed as desired

        switch(movementDirection) {
            case "up":
                controlsRef.current.moveForward(speed * delta);
                break;
            case "down":
                controlsRef.current.moveForward(-speed * delta);
                break;
            case "left":
                controlsRef.current.moveRight(-speed * delta);
                break;
            case "right":
                controlsRef.current.moveRight(speed * delta);
                break;
            default:
        }
    }
    
    useFrame((state, delta) => {
        updateControls(delta);
    });

<<<<<<< HEAD
    return<PointerLockControls ref={ controlsRef } />
=======
    return <PointerLockControls ref={ controlsRef } />
>>>>>>> 3fd257df683b5fb3a3e11e17c4a4f6dbe94e7cc2
}