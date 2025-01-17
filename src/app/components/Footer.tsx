import Link from 'next/link'

import { SiDiscord, SiLinkedin, SiGithub, SiLinktree } from 'react-icons/si'

{/* <div className="z-50 w-full h-[20vh] bg-gradient-to-b from-neutral-800 dark:from-neutral-950 to-neutral-950 dark:to-black bg-opacity-300"> */}

export default function Footer() {
    return (
        <div className="w-full h-full bg-gradient-to-t from-black to-neutral-900 text-lg font-semibold py-10">

            <p className="text-center font-semibold">Let&apos;s connect.</p>

            <div className='flex flex-row flex-wrap gap-3 justify-center py-4 overflow-x-hidden'>
                <Link href="https://discordapp.com/users/168406210687533056" target="_blank">
                    <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200">
                        <SiDiscord className="my-auto group-hover:text-white" />
                        Discord
                    </button>
                </Link>

                <Link href="https://www.linkedin.com/in/lance-ruiz" target="_blank">
                    <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200">
                        <SiLinkedin className="my-auto group-hover:text-white" />
                        LinkedIn
                    </button>
                </Link>

                <Link href="https://github.com/dev-alto/" target="_blank">
                    <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-1 py-2 px-4 active:scale-95 hover:bg-yellow-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200">
                        <SiGithub className="my-auto group-hover:text-white" />
                        GitHub
                    </button>
                </Link>

                <Link href="https://linktr.ee/devalto" target="_blank">
                    <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white border-[1px] border-neutral-800 hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200">
                        <SiLinktree className="my-auto group-hover:text-white" />
                        LinkTree
                    </button>
                </Link>
            </div>

            <p className="text-center text-neutral-600">Copyright ©️ Lance Ruiz 2024 - All Rights Reserved</p>

        </div>
    )
}