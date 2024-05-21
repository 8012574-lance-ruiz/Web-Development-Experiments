import type { Metadata } from 'next'
import './globals.css'

import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Webring from './components/Webring'

import { Inter, Poppins, Ubuntu, Rubik, Open_Sans } from 'next/font/google'

// Default base font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

const rubik = Rubik({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-rubik'
})

const poppins = Poppins({ 
    weight: ['200', '300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
})

const ubuntu = Ubuntu({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-ubuntu'
})

const open_sans = Open_Sans({
    weight: ['300', '500', '700'],
    subsets: ['latin'],
    variable: '--font-open_sans'
})

export const metadata: Metadata = {
    title: 'Lance Ruiz',
    description: 'Indie game developer, software engineer, FLOSS 💝.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) : React.ReactNode {
    return (
        <html>
            <head lang="en" >

            </head>

            <body className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${open_sans.variable}`}>
                <Topbar />
                {children}
                <Footer />
                <Webring ringName='lance' url='https://raw.githubusercontent.com/Skyline-College-Computer-Science-Club/clubwebring/master/webring.json'/>
            </body>

        </html>
    )
}
