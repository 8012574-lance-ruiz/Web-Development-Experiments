import Link from 'next/link'

import { SiDiscord, SiLinkedin, SiGithub, SiLinktree } from 'react-icons/si'

export default function Footer() {
    return (
        <div className="z-50 w-screen h-[20vh] bg-gradient-to-b from-neutral-950 to-black bg-opacity-30 border-neutral-900 border-t-8">
            <div className="h-full text-lg font-semibold pt-4">

                <div className="flex gap-3 justify-center ">
                    <Link href="https://discordapp.com/users/168406210687533056" target="_blank">
                        <button className="flex bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 active:border-blue-950 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-blue-800 hover:outline-4 active:outline-2 hover:outline-double outline-white hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200">
                            <SiDiscord className="my-auto" />
                            Discord
                        </button>
                    </Link>

                    <Link href="https://www.linkedin.com/in/lance-ruiz" target="_blank">
                        <button className="flex bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-red-900 hover:outline-4 active:outline-2 hover:outline-double outline-white hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <SiLinkedin className="my-auto" />
                            LinkedIn
                        </button>
                    </Link>

                    <Link href="https://github.com/dev-alto/" target="_blank">
                        <button className="flex bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-1 py-2 px-4 active:scale-95 hover:bg-yellow-900 hover:outline-4 active:outline-2 hover:outline-double outline-white hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <SiGithub className="my-auto" />
                            GitHub
                        </button>
                    </Link>

                    <Link href="https://linktr.ee/devalto" target="_blank">
                        <button className="flex bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-green-900 hover:outline-4 active:outline-2 hover:outline-double outline-white hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <SiLinktree className="my-auto" />
                            LinkTree
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}