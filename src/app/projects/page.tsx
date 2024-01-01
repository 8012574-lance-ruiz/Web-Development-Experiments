import Image from 'next/image'

import Topbar from '../components/Topbar'

const backdrop = '/assets/melon.png'

export default function Projects() {
    return (
        <>
            <Topbar/>

            {/* Hero */}
            <div className="absolute w-full h-full bg-neutral-800">
                <Image width={3840} height={2160} src={backdrop} alt="Backdrop" className="z-0 opacity-20 w-full h-full"/>
                <div className="z-10 w-full h-full bg-red-800">
                    <h1 className="text-center text-white">Hello!</h1>
                </div>
            </div>
        </>
    )
}
