'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import * as THREE from 'three';

import { useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { poppins } from './fonts';

const backdrop = '/assets/home/backdrop.jpg'

function VisualModel() {
    const ref = useRef<THREE.Mesh>(null!)

    const [hovering, setHovering] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [xOffset, setXOffset] = useState(0)

    useFrame(() => {
        setXOffset(xOffset + 0.002)
        ref.current.rotation.x = Math.PI / 10
        ref.current.rotation.y = Math.PI + 0.5 + (Math.sin(xOffset) / 8)
    })

    const gltf = useLoader(GLTFLoader, './assets/sculpture.glb');

    return (
        <primitive
            ref={ref}
            scale={hovering ? 1.05 : 1}
            onClick={() => setClicked(!clicked)}
            onPointerOver={() => setHovering(true)}
            onPointerOut={() => setHovering(false)}
            object={gltf.scene}
        />
    )
}

export default function Home() {
    return (
        <>

            {/*              Hero              */}

            <div className="w-full h-screen">

                {/* Backdrop Image */}
                <Image width={3840} height={2160} src={backdrop} alt="" role="presentation" className="absolute opacity-30 w-full h-full" />

                {/* 3D object */}
                <div className="absolute left-[5%] w-[45%] h-full">
                    <Canvas orthographic camera={{ zoom: 40, position: [0, 0, 100] }}>
                        <ambientLight intensity={2} />
                        <hemisphereLight color={"#FFEBC6"} groundColor={"#FFF"} intensity={15} />
                        <directionalLight intensity={25} position={[20, 0, 0]} />
                        <VisualModel />
                    </Canvas>
                </div>

                <div className="absolute left-[45%] w-[45%] h-full mx-auto flex flex-col items-center justify-center">
                    
                    {/* Backdrop image */}
                    {/* <Image width={1920} height={1080} src={heroOverlay} className="opacity-30 absolute top-0 w-full h-full" alt="overlay"/> */}

                    <h1 className="z-20 title-main text-2xl text-left sm:text-5xl text-shadow shadow-black font-bold text-white">Lance Ruiz</h1>

                    <div className="z-20 text-white text-center text-shadow shadow-black text-2xl py-4 w-full">
                        <p>Freelance game developer, growing software engineer, and FLOSS 💗.</p>
                        <h1 className="first-letter:source-code font-bold text-[30px] pt-[20px]">
                            -
                        </h1>
                    </div>
                </div>

                {/* top */} 
                <div className="bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[20%]"></div>
                {/* bot */} 
                <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-[20%]"></div>
            </div>



            <div className="relative top-[60px]">

                <div className="flex flex-col items-center">
                    <p className="bg-neutral-500 w-full h-full">Test</p>
                    <p className="bg-neutral-500 w-full h-full">Test</p>
                    <p className="bg-neutral-500 w-full h-full">Test</p>
                    <p className="bg-neutral-500 w-full h-full">Test</p>
                    <p className="bg-neutral-500 w-full h-full">Test</p>
                </div>

            </div>
        </>
    )
}
