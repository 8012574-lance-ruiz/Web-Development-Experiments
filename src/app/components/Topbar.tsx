import Image from 'next/image'
import Link from 'next/link'

import { GoQuestion } from 'react-icons/go'
import { FiTool } from 'react-icons/fi'
import { GrContact } from 'react-icons/gr'
import { RiContactsBook2Line } from 'react-icons/ri'

const asset_emblem = '/assets/emblem.png'

export default function Topbar() {
    return (
        <div className="z-50 fixed w-screen h-[60px] bg-neutral-800 dark:bg-neutral-900 border-b-[1px] border-neutral-600 dark:border-neutral-800">
            <div className="flex h-full px-4 justify-between items-center text-lg font-semibold overflow-hidden">

                <div className="flex gap-3 items-center">
                    <Image width={64} height={64} src={asset_emblem} alt="Site Emblem" className="drop-shadow-lg rounded-2xl hover:rotate-180 w-[50px]" />
                    <h1 className="mr-4 text-xl">Lance Ruiz</h1>
                </div>

                <div className="flex gap-2">
                    <Link href="/">
                        <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 border-[1px] border-neutral-500 dark:border-neutral-800 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-blue-800 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white hover:outline-blue-600 active:outline-neutral-200 duration-200 active:duration-200">
                            <GoQuestion className="my-auto group-hover:text-white" />
                            About
                        </button>
                    </Link>

                    <Link href="/projects/">
                        <button className="flex group bg-[rgb(50,50,50)] dark:bg-neutral-900 bg-opacity-80 border-[1px] border-neutral-500 dark:border-neutral-800 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-red-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white hover:outline-red-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <FiTool className="my-auto group-hover:text-white" />
                            Projects
                        </button>
                    </Link>

                    <Link href="/blog/">
                        <button className="flex group bg-[rgb(50,50,50)] dark:bg-neutral-900 bg-opacity-80 border-[1px] border-neutral-500 dark:border-neutral-800 rounded-md gap-2 py-2 px-4 active:scale-95 hover:bg-green-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white hover:outline-green-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <GrContact className="my-auto group-hover:text-white" />
                            Blog
                        </button>
                    </Link>

                    <Link href="">
                        <button className="flex group bg-neutral-700 dark:bg-neutral-900 bg-opacity-80 border-[1px] border-neutral-500 dark:border-neutral-800 rounded-md gap-1 py-2 px-4 active:scale-95 hover:bg-yellow-900 hover:outline-4 hover:text-white active:outline-2 hover:outline-double outline-white hover:outline-yellow-700 active:outline-neutral-200 duration-200 active:duration-200">
                            <RiContactsBook2Line className="my-auto group-hover:text-white" />
                            Contact
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}