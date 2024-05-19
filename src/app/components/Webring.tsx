'use client'

import { useEffect, useState } from "react"

export default function Webring({ ringName, url }: { ringName: string, url: string }) {

    const [webringData, setWebringData] = useState({
        'name': 'loading',
        'left': { name: 'loading...', link: 'https://www.google.com' },
        'right': { name: 'loading...', link: 'https://www.google.com' }
    })

    async function queryWebringJson() {
        try {
            const response = await fetch(url)
            if (response.status == 404) throw new Error('Could not find, access remote webring.json; check if "webringUrl" paramater is valid.')

            const data = await response.json()

            let ringIndex = 0
            for (const entry of data.ring) {
                if (entry.name == ringName)
                    break
                else
                    ringIndex++
            }

            if (ringIndex == data.ring.length)
                throw new Error(`The given ringName paramater "${ringName}" was not found in webring.json.`)

            const leftEntry = data.ring[(ringIndex == 0 ? data.ring.length - 1 : ringIndex - 1)]
            const rightEntry = data.ring[(ringIndex == data.ring.length - 1 ? 0 : ringIndex + 1)]

            setWebringData({
                'name': data.name,
                'left': { name: leftEntry.name, link: 'https://' + leftEntry.link },
                'right': { name: rightEntry.name, link: 'https://' + rightEntry.link }
            })
        }
        catch(err) {
            console.log('⚠️ Querying webring failed — ' + err)
            setWebringData({
                'name': 'Invalid webring!',
                'left': { name: 'not found', link: 'https://www.google.com' },
                'right': { name: 'not found', link: 'https://www.google.com' }
            })
        }
    }

    useEffect(() => {
        queryWebringJson()
    }, [])

    return (
        <div className="w-full text-white bg-neutral-900 text-center">
            <div className="py-6 font-semibold">
                <div>you're viewing</div>
                <div className="flex gap-4 justify-center my-2 text-lg">
                    <a href={webringData.left.link}><div className="w-44 bg-neutral-800 rounded-full">👈 {webringData.left.name}</div></a>
                    <div className="w-44 bg-neutral-800 rounded-full">{ringName}</div>
                    <a href={webringData.right.link}><div className="w-44 bg-neutral-800 rounded-full">{webringData.right.name} 👉</div></a>
                </div>
                <div className="">Apart of the <span className="text-blue-400"><a href={url}>{webringData.name}</a></span> webring.</div>
            </div>
            
        </div>
    )
}