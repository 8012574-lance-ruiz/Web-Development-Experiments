import type { Metadata } from 'next'
import './globals.css'

import Topbar from './components/Topbar'
import Footer from './components/Footer'

import { Inter, Poppins, Ubuntu, Rubik } from 'next/font/google'



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



export const metadata: Metadata = {
    title: 'Lance The Ruiz',
    description: 'Freelance game developer, growing software engineer, and FLOSS 💗.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${ubuntu.variable} ${rubik.variable}`}>
            <body>
                <Topbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
