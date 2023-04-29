import React, { useRef } from 'react';
import { PointerLockControls, FirstPersonControl, FlyControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Pov()
{
    const controlsRef = useRef();

    // Enable mouse lock when the canvas is clicked
    document.addEventListener('click', () => {
        controlsRef.current.unlock();
    });
    
    // Key press
    const keys = {};

    document.addEventListener('keydown', (e) => {
        keys[e.code] = true;
        
        if (keys['KeyF']) 
        {
            controlsRef.current.lock();
        }
        
        if (keys['KeyR']) 
        { 
            controlsRef.current.unlock();
        }
    });
    
    document.addEventListener('keyup', (e) => {
        keys[e.code] = false;
    });

    // Control camera
    function updateControls(delta) {
        const speed = 20; // Adjust speed as desired
    
        if (keys['KeyW']) controlsRef.current.moveForward(speed * delta);
        if (keys['KeyS']) controlsRef.current.moveForward(-speed * delta);
        if (keys['KeyA']) controlsRef.current.moveRight(-speed * delta);
        if (keys['KeyD']) controlsRef.current.moveRight(speed * delta);
    }
    
    useFrame((state, delta) => {
        updateControls(delta);
    });

    return <PointerLockControls ref={ controlsRef } />
}