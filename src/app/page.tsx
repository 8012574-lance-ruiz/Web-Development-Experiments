'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import * as THREE from 'three';

import { useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { poppins } from './fonts';

const backdrop = '/assets/home/backdrop.jpg'
const gamedev = '/assets/home/gamedev.png'
const webdev = '/assets/home/webdev.png'
const gendev = '/assets/home/gendev.png'

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
            <div className="w-screen h-screen bg-black">

                {/* Backdrop Image */}
                <Image width={3840} height={2160} src={backdrop} alt="" role="presentation" className="absolute opacity-35 w-full h-full" />

                {/* 3D object */}
                <div className="z-40 absolute left-[5%] w-[45%] h-full">
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

                    <h1 className="z-20 text-2xl text-left sm:text-5xl text-shadow shadow-black font-bold text-white">Hello, I am Lance Ruiz.</h1>

                    <div className="z-20 text-white text-center text-shadow shadow-black text-2xl py-4 w-full">
                        <p>Freelance game developer, growing software engineer, and FLOSS 💗.</p>
                        <h1 className="first-letter:source-code font-bold text-[30px] pt-[20px]">
                            ---
                        </h1>
                    </div>
                </div>

                {/* top */}
                <div className="absolute top-0 bg-gradient-to-b from-black to-transparent w-full h-[20%]" />
                {/* bottom */}
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[20%]" />
                {/* right */}
                <div className="absolute right-0 bg-gradient-to-l from-[#916b3a28] to-transparent w-[75%] h-full" />
                {/* left */}
                <div className="absolute left-0 bg-gradient-to-r from-[#3b3a9127] to-transparent w-[50%] h-full" />
            </div>

            <div className="flex w-screen sm:h-[120vh] items-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-900">
                <div className="flex flex-col sm:flex-row w-full h-full sm:w-[66.6vw] sm:h-[52.5vh] mx-auto my-auto items-center justify-center gap-10">

                    <div className="flex flex-col w-[33%] h-full items-center rounded-2xl bg-gradient-to-b from-yellow-800 to-yellow-950 border-4 border-yellow-900">
                        <Image width={512} height={512} src={gamedev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-[1.15vw] text-yellow-100">Game Development</h2>
                            <p className="h-auto text-[1vw] text-center px-6">Nearly ten years of combined on-and-off experience in game development in both Roblox and Unity.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[33%] h-full items-center rounded-2xl bg-gradient-to-b from-blue-800 to-blue-950 border-4 border-blue-900">
                        <Image width={512} height={512} src={webdev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-[1.15vw] text-blue-200">Web Development</h2>
                            <p className="h-auto text-[1vw] text-center px-6">Nearly ten years of combined on-and-off experience in game development in both Roblox and Unity.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[33%] h-full items-center rounded-2xl bg-gradient-to-b from-green-800 to-green-950 border-4 border-green-900">
                        <Image width={512} height={512} src={gendev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-[1.15vw] text-green-300">Experiments</h2>
                            <p className="h-auto text-[1vw] text-center px-6">Nearly ten years of combined on-and-off experience in game development in both Roblox and Unity.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full h-screen bg-gradient-to-b from-black to-transparent">
                Blog
            </div>
            <div className="w-full h-screen bg-gradient-to-b from-black to-transparent">
                Contact
            </div>

        </>
    )
}
