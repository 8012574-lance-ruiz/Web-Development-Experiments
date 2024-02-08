import type { Metadata } from 'next'
import './globals.css'

import Topbar from './components/Topbar'
import Footer from './components/Footer'

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
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable} ${open_sans.variable}`}>
            <body>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
