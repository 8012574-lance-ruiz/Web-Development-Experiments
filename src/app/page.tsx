import Image from 'next/image';

import Topbar from './components/Topbar';

const backdrop = '/assets/hero_backdrop.jpg';

import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Home() {
    return (
        <>
            <Topbar/>

            {/* Hero */}
            <div className="absolute w-full h-full bg-neutral-800">
                <Image width={3840} height={2160} src={backdrop} alt="Backdrop" className="opacity-20 w-full h-full"/>
            </div>
        </>
    );
}
