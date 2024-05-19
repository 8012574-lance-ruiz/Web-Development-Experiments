import Image from 'next/image'

const backdrop = '/assets/melon.png'

export default function Projects() {
    return (
        <>

            {/* Hero */}
            <div className="w-full h-[50vh] bg-neutral-800">
                <Image width={3840} height={2160} src={backdrop} alt="Backdrop" className="z-0 opacity-20 w-full h-full object-cover"/>
            </div>

            <div className="w-full h-[100vh] bg-neutral-600">

            </div>

        </>
    )
}
