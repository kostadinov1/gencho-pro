import React from 'react'
import './canvas-3d.css'
import * as THREE from 'three'
import { render } from '@testing-library/react';
import { Theme } from '@ant-design/cssinjs';



function Canvas3D() {

    // const scene = new THREE.Scene();

    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)

    // const renderer = new THREE.WebGLRenderer({
    //     canvas: document.querySelector('.canvas-3d'),
    // });

    // renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.position.setZ(30);
    // renderer.render(scene, camera)

    return (
        <section className='canvas-3d'>
        
        </section>
    )
    }

export default Canvas3D
