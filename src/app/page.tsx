'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'

import { Link as ScrollLink, Element } from 'react-scroll'

import * as THREE from 'three'

import { useLoader } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { IoMdArrowRoundDown } from 'react-icons/io'

const backdrop = '/assets/home/backdrop.jpg'
const gamedev = '/assets/home/gamedev.png'
const webdev = '/assets/home/webdev.png'
const gendev = '/assets/home/gendev.png'
const heroOverlay = '/assets/home/hero_overlay.gif'

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

export default function Home() : React.ReactNode {
    return (
        <>

            {/*              Hero              */}

            <div className="w-full h-screen bg-black">

                {/* Backdrop Image */}
                <Image width={3840} height={2160} src={backdrop} alt="" role="presentation" className="absolute opacity-35 w-full h-full object-cover" />

                {/* Hero Overlay */}
                <Image width={1920} height={1080} src={heroOverlay} className="absolute opacity-[7%] top-0 w-full h-full" alt="overlay"/>



                {/* Vignettes */}

                {/* top */}
                <div className="absolute top-0 bg-gradient-to-b from-black to-transparent w-full h-[30%]" />
                
                {/* bottom */}
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[75%]" />

                {/* right */}
                <div className="absolute right-0 bg-gradient-to-l from-[#916b3a28] to-transparent w-[75%] h-full" />
                <div className="absolute right-0 bg-gradient-to-l from-[#00000028] to-transparent w-[50%] h-full" />

                {/* left */}
                <div className="absolute left-0 bg-gradient-to-r from-[#3b3a9127] to-transparent w-[50%] h-full" />



                {/* main */}
                <div className="z-10 w-full h-full flex flex-col sm:flex-row items-center justify-center px-[10%] py-[10%]">

                    {/* 3D Centerpiece Model */}

                    <div className="w-full h-1/2 sm:w-1/2 sm:h-full">
                        <Canvas orthographic camera={{ zoom: 40, position: [0, 0, 50] }} className="drop-shadow-[0_0_25px_rgba(0,0,0,1)]">
                            <ambientLight intensity={2} />
                            <hemisphereLight color={"#FFEBC6"} groundColor={"#FFF"} intensity={15} />
                            <directionalLight intensity={25} position={[20, 0, 0]} />
                            <VisualModel />
                        </Canvas>
                    </div>

                    {/* Centerpiece Text */}
                    <div className="w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col items-center justify-center text-white">

                        <h1 className="text-4xl sm:text-5xl text-center duration-300 text-shadow-xl shadow-black font-Poppins font-medium drop-shadow-[0_0_25px_rgba(255,175,125,0.7)] hover:drop-shadow-[0_0_25px_rgba(255,175,125,1)]">Hello, I am Lance Ruiz.</h1>

                        <div className="text-center text-shadow shadow-black text-xl sm:text-2xl pt-4 w-full drop-shadow-[0_0_25px_rgba(255,155,115,0.8)]">
                            <p className="font-Ubuntu">Freelance indie game developer, software engineer, FLOSS 💝.</p>
                            <h1 className="first-letter:source-code font-bold text-[30px] pt-[20px]">
                            </h1>
                        </div>

                        <ScrollLink to="about" smooth={true} offset={-475} duration={1500} className="relative group rounded-lg active:scale-95 duration-150 hover:border-green-900 border-neutral-400 border-2 hover:outline-double hover:outline-4 active:outline-2 text-white text-lg title-main overflow-hidden">
                            <IoMdArrowRoundDown className="absolute w-full h-full group-hover:translate-y-0 -translate-y-[100%] duration-300 pointer-events-none bg-gradient-to-t from-[#16a34aec] to-[#ffffff91]"/>
                            <button className="flex w-full justify-center py-2 px-6 font-semibold text-shadow-lg shadow-black hover:bg-green-600 duration-300 hover:border-green-300 overflow-hidden">
                                <p className="text-center font-Rubik">Tour My Experience</p>
                            </button>
                        </ScrollLink>
                    </div>
                    
                </div>

            </div>


            {/*         About Cards         */}

            {/* 


            <div className="flex w-full h-[1200px] mx-auto items-center bg-gradient-to-b from-black via-neutral-950 to-neutral-900">

                <Element name="about"></Element>

                <div className="flex flex-row flex-wrap mx-auto items-center justify-center gap-4 lg:gap-10">

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-yellow-700 to-transparent hover:outline-yellow-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-yellow-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(237,144,10,0.15)] hover:drop-shadow-[0_15px_35px_rgba(237,144,10,0.35)]">
                        <Image width={300} height={300} src={gamedev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-yellow-100 font-Poppins">Game Development</h2>
                            <p className="h-auto text-md lg:text-lg text-center px-8 text-white font-Open_Sans">Nearly ten years of combined on-and-off game design and development experience on the Roblox, Unity, and Godot platforms and engines.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-blue-800 to-transparent hover:outline-blue-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-blue-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(70,120,250,0.15)] hover:drop-shadow-[0_15px_35px_rgba(70,120,250,0.45)]">
                        <Image width={300} height={300} src={webdev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-blue-200 font-Poppins">Web Development</h2>
                            <p className="h-auto text-lg text-center px-8 text-white font-Open_Sans">This is a sample placeholder paragraph with sample placeholder text.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-green-700 to-transparent hover:outline-green-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-green-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(50,255,100,0.15)] hover:drop-shadow-[0_15px_35px_rgba(50,255,100,0.35)]">
                        <Image width={300} height={300} src={gendev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-green-300 font-Poppins">Projects & Experiments</h2>
                            <p className="h-auto text-lg text-center px-8 text-white font-Open_Sans">This is a sample placeholder paragraph with sample placeholder text.</p>
                        </div>
                    </div>

                </div>
            </div>




            <div className="w-full h-screen bg-gradient-to-b from-neutral-900 via-violet-950 to-neutral-900">
                Blog
            </div>
            <div className="w-full h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
                Contact
            </div> */}

        </>
    )
}
