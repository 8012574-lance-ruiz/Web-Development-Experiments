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

            <div className="w-full h-screen">

                {/* Backdrop Image */}
                <Image width={3840} height={2160} src={backdrop} alt="" className="absolute opacity-35 w-full h-full object-cover" />

                {/* Hero Overlay */}
                <Image width={1920} height={1080} src={heroOverlay} className="absolute opacity-[10%] top-0 w-full h-full" alt="overlay"/>



                {/* Vignettes */}

                {/* top */}
                <div className="absolute top-0 bg-gradient-to-b from-black to-transparent w-full h-[30%]" />
                
                {/* bottom */}
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[75%]" />
                <div className="z-10 absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-[35%]" />

                {/* right */}
                <div className="absolute right-0 bg-gradient-to-l from-[#916b3a28] to-transparent w-[75%] h-full" />
                <div className="absolute right-0 bg-gradient-to-l from-[#00000028] to-transparent w-[50%] h-full" />

                {/* left */}
                <div className="absolute left-0 bg-gradient-to-r from-[#3b3a9127] to-transparent w-[50%] h-full" />



                {/* main */}
                <div className="z-10 w-full h-full flex flex-col sm:flex-row items-center justify-center px-[10%] py-[10%]">

                    {/* 3D Centerpiece Model */}

                    <div className="w-full h-1/2 sm:w-1/2 sm:h-full">
                        <Canvas orthographic camera={{ zoom: 40, position: [0, 0, 50] }} className="drop-shadow-[0_0_50px_rgba(0,0,0,1)]">
                            <ambientLight intensity={2} />
                            <hemisphereLight color={"#FFEBC6"} groundColor={"#FFF"} intensity={15} />
                            <directionalLight intensity={25} position={[20, 0, 0]} />
                            <VisualModel />
                        </Canvas>
                    </div>

                    {/* Centerpiece Text */}
                    <div className="w-full h-1/2 sm:w-1/2 sm:h-full flex flex-col items-center justify-center text-white">

                        <h1 className="text-4xl sm:text-5xl text-center duration-300 text-shadow-xl shadow-black font-Poppins font-medium drop-shadow-[0_0_25px_rgba(255,175,125,0.7)] hover:drop-shadow-[0_0_50px_rgba(255,175,125,1)]">Hello, I am Lance Ruiz.</h1>

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

            <div className="bg-black h-60"></div>

            <div className="relative">
                
                {/* top     */}
                <div className='z-0 bg-gradient-to-b from-black to-transparent absolute top-0 w-full h-[20%]'></div>
                {/* bottom  */}
                <div className='z-0 bg-gradient-to-t from-black to-transparent absolute bottom-0 w-full h-[20%]'></div>
                {/* left    */}
                <div className='z-0 bg-gradient-to-r from-[#00000075] to-transparent absolute top-0 left-0 w-[50%] h-full'></div>
                {/* right   */}
                <div className='z-0 bg-gradient-to-l from-[#00000075] to-transparent absolute top-0 right-0 w-[50%] h-full'></div>

                <div className="flex flex-col items-center justify-center gap-5 py-8 bg-[#100418] outline outline-[1px] outline-neutral-500">
                    <p className="z-10 text-3xl font-Ubuntu font-bold text-white">My Preferred Tech Stack</p>
                    <div className="z-10 flex flex-row flex-wrap justify-center gap-4">
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#22578f] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#3c87d8] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/typescript.png"} alt="" className="h-[55%] aspect-square object-contain w-auto rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Typescript</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#3d320e] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#645d1e] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/python.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Python</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#10151f] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#17414d] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/tailwind.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#4d3019] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#7e4211] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/html.webp"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">HTML</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#3a552d] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#4d9238] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/nodejs.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">NodeJS</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#351f0c] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#72360f] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/ubuntu.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Ubuntu</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#123138] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#0b5a6e] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/luau.png"} alt="" className="h-[55%] w-auto raspect-square object-contain marker:ounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Lua+u</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#351f0c] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#72360f] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/blender.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Blender</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#232e44] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#1d5796] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/cpp.png"} alt=""className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">C++</p>
                        </div>
                        <div className="flex flex-col items-center w-32 h-[160px] bg-[#0d4641] rounded-xl justify-center gap-2 outline outline-[2px] outline-[#0f7568] hover:scale-105 transition-all">
                            <Image width={128} height={128} src={"/assets/home/techstack/popos.png"} alt="" className="h-[55%] w-auto aspect-square object-contain rounded-xl mt-2" />
                            <p className="text-lg font-semibold font-Open_Sans">Pop!_OS</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*         About Cards         */}

            <div className="flex w-full py-40 mx-auto items-center bg-gradient-to-b from-black via-neutral-950 to-neutral-900">

                <Element name="about"></Element>

                <div className="flex flex-row flex-wrap mx-auto items-center justify-center gap-4 lg:gap-10">

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-yellow-700 to-transparent hover:outline-yellow-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-yellow-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(237,144,10,0.15)] hover:drop-shadow-[0_15px_35px_rgba(237,144,10,0.35)]">
                        <Image width={300} height={300} src={gamedev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-yellow-100 font-Poppins">Game Development</h2>
                            <p className="h-auto text-md lg:text-lg text-center px-8 text-white font-Open_Sans">Inheriting ten years of combined on-and-off game design and software development experience on the Roblox, Unity, and Godot platforms and engines.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-blue-800 to-transparent hover:outline-blue-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-blue-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(70,120,250,0.15)] hover:drop-shadow-[0_15px_35px_rgba(70,120,250,0.45)]">
                        <Image width={300} height={300} src={webdev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-blue-200 font-Poppins">Web Development</h2>
                            <p className="h-auto text-lg text-center px-8 text-white font-Open_Sans">Active developer of many web applications and sites, including this one! Implemented full tech stacks for front and back-end systems using NextJS, and Tailwind CSS.</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-[400px] h-[480px] duration-300 active:scale-95 items-center rounded-2xl bg-gradient-to-b from-green-700 to-transparent hover:outline-green-800 outline-double outline-0 hover:outline-8 active:outline-4 border-4 border-green-900 hover:scale-[98%] drop-shadow-[0_15px_25px_rgba(50,255,100,0.15)] hover:drop-shadow-[0_15px_35px_rgba(50,255,100,0.35)]">
                        <Image width={300} height={300} src={gendev} alt="" className="h-[50%] mt-[5%] w-auto aspect-square" />
                        <div className="flex flex-col w-full h-[45%] pt-[5%] items-center gap-1">
                            <h2 className="font-bold text-xl text-green-300 font-Poppins">Projects & Experiments</h2>
                            <p className="h-auto text-lg text-center px-8 text-white font-Open_Sans">Current self-developing pioneer of new project scopes, including electronics, homelab network managment, internet of things, and UI/UX design.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="w-full h-screen bg-gradient-to-b from-neutral-900 via-violet-950 to-neutral-900">
                Blog
            </div>
            <div className="w-full h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
                Contact
            </div> */}

        </>
    )
}
