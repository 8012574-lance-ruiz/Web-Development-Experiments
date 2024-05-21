'use client'

import { useEffect, useState } from "react"

import Link from "next/link"

export default function Webring({ ringName, url }: { ringName: string, url: string }) {

    const [webringData, setWebringData] = useState({
        name: 'loading',
        left: { name: 'loading...', link: 'https://www.google.com' },
        right: { name: 'loading...', link: 'https://www.google.com' }
    })

    async function queryWebringJson() {
        try {
            const response = await fetch(url)
            if (response.status == 404) 
                throw new Error('Could not find, access remote webring.json; check if "webringUrl" paramater is valid.')

            const data = await response.json()

            let ringIndex = 0
            for (const entry of data.ring) {
                if (entry.name == ringName)
                    break
                else
                    ringIndex++
            }

            if (ringIndex == data.ring.length)
                throw new Error(`The given "ringName" paramater "${ringName}" was not found in the webring.json @ "webringUrl"`)

            const leftEntry = data.ring[(ringIndex == 0 ? data.ring.length - 1 : ringIndex - 1)]
            const rightEntry = data.ring[(ringIndex == data.ring.length - 1 ? 0 : ringIndex + 1)]

            setWebringData({
                name: data.name,
                left: { name: leftEntry.name, link: 'https://' + leftEntry.link },
                right: { name: rightEntry.name, link: 'https://' + rightEntry.link }
            })
        }
        catch(err) {
            console.log('⚠️ Querying webring failed — ' + err)
            setWebringData({
                name: 'not found',
                left: { name: 'not found', link: '' },
                right: { name: 'not found', link: '' }
            })
        }
    }

    useEffect(() => {
        queryWebringJson()
    }, [])

    return (
        <div className="w-full bg-neutral-950 text-center">
            <div className="py-6 font-semibold">
                <p className="hidden sm:block">you're viewing</p>
                <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center my-2 text-lg">
                    <Link href={webringData.left.link} target="_blank">
                        <p className="w-44 py-1 bg-neutral-800 rounded-lg border-neutral-600 active:border-white border-[1px] active:scale-95 hover:bg-[#295a22] transition-all">👈 {webringData.left.name}</p>
                    </Link>
                    <div className="w-44 py-1 bg-neutral-800 rounded-lg border-neutral-600 border-[1px] pointer-events-none">{ringName}</div>
                    <Link href={webringData.right.link} target="_blank">
                        <p className="w-44 py-1 bg-neutral-800 rounded-lg border-neutral-600 active:border-white border-[1px] active:scale-95 hover:bg-[#295a22] transition-all">{webringData.right.name} 👉</p>
                    </Link>
                </div>
                <div className="text-neutral-500">Apart of the <span className="text-blue-400"><a href={url}>{webringData.name}</a></span> webring.</div>
            </div>
        </div>
    )
}